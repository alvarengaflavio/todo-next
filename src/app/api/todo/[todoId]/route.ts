import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/db";
import { exceptionHandler } from "@/lib/exception-handler";
import {
  AuthRequiredException,
  BadRequestException,
  NotFoundException,
} from "@/lib/exceptions";
import { createTodoSchema, updateTodoSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    todoId: string;
  };
};

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) throw new AuthRequiredException("Usuário não autenticado");

    const json = await req.json();
    const { params } = context;

    if (!params.todoId) throw new BadRequestException("ID não informado");
    if (!(await verifyCurrentUserHasAccessToTodo(params.todoId)))
      throw new AuthRequiredException("Usuário não tem acesso a tarefa");

    const zBody = updateTodoSchema.parse(json);
    const data = { title: zBody.title, done: zBody.done };
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
    const session = await getServerSession(authOptions);
    const user = session?.user;

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
    const { params } = context;
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) throw new AuthRequiredException("Usuário não autenticado");
    if (!params.todoId) throw new BadRequestException("ID não informado");
    if (!(await verifyCurrentUserHasAccessToTodo(params.todoId)))
      throw new AuthRequiredException("Usuário não tem acesso a tarefa");

    const where = { id: params.todoId };
    const todo = await prisma.todo.delete({ where });

    if (!todo) throw new NotFoundException("Todo não encontrado");

    return NextResponse.json(todo, { status: 200 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

async function verifyCurrentUserHasAccessToTodo(todoId: string) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const count = await prisma.todo.count({
    where: {
      id: todoId,
      userId: user?.id ? user.id : undefined,
    },
  });

  return count > 0;
}
