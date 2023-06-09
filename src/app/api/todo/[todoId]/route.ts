import { prisma } from "@/lib/db/db";
import { exceptionHandler } from "@/lib/exception-handler";
import {
  AuthRequiredException,
  BadRequestException,
  NotFoundException,
} from "@/lib/exceptions";
import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "@/lib/zod";
import { getCurrentUser } from "@/lib/session";

type Context = {
  params: {
    todoId: string;
  };
};

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const user = await getCurrentUser();
    if (!user) throw new AuthRequiredException("Usuário não autenticado");

    const json = await req.json();
    const { params } = context;

    if (!params.todoId) throw new BadRequestException("ID não informado");
    if (!(await verifyCurrentUserHasAccessToTodo(params.todoId)))
      throw new AuthRequiredException("Usuário não tem acesso a tarefa");

    const zBody = createTodoSchema.parse(json);
    const data = { title: zBody.title };
    const where = { id: params.todoId };

    const updatedTodo = await prisma.todo.update({ where, data });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

export async function GET(req: NextRequest, context: Context) {
  try {
    const { params } = context;
    const user = await getCurrentUser();
    console.log("Usuário: ", user);
    console.log("params: ", params);
    if (!user) throw new AuthRequiredException("Usuário não autenticado");
    if (!params.todoId) throw new BadRequestException("ID não informado");
    if (!(await verifyCurrentUserHasAccessToTodo(params.todoId)))
      throw new AuthRequiredException("Usuário não tem acesso a tarefa");

    const where = { id: params.todoId };
    const todo = await prisma.todo.findUnique({ where });

    if (!todo) throw new NotFoundException("Todo não encontrado");

    return NextResponse.json(todo, { status: 200 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

export async function DELETE(req: NextRequest, context: Context) {
  try {
    // ! checar se usuário está autenticado e se o todo pertence a ele
    const { params } = context;

    if (!params.todoId) throw new BadRequestException("ID não informado");

    const where = { id: params.todoId };
    const todo = await prisma.todo.delete({ where });

    if (!todo) throw new NotFoundException("Todo não encontrado");

    return NextResponse.json(todo, { status: 200 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

async function verifyCurrentUserHasAccessToTodo(todoId: string) {
  const user = await getCurrentUser();
  const count = await prisma.todo.count({
    where: {
      id: todoId,
      userId: user?.id,
    },
  });

  console.log("Dono da Tarefa? ", count);

  return count > 0;
}
