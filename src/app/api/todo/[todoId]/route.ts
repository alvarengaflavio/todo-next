import { prisma } from "@/lib/db/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { BadRequestException, NotFoundException } from "@/lib/exceptions";
import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "@/lib/zod";

type Context = {
  params: {
    todoId: string;
  };
};

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const json = await req.json(); // data is a JS object with the JSON-parsed body
    const { params } = context;

    if (!params.todoId) throw new BadRequestException("ID não informado");

    const body = createTodoSchema.parse(json);
    const data = { title: body.title };
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

    if (!params.todoId) throw new BadRequestException("ID não informado");

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

    if (!params.todoId) throw new BadRequestException("ID não informado");

    const where = { id: params.todoId };
    const todo = await prisma.todo.delete({ where });

    if (!todo) throw new NotFoundException("Todo não encontrado");

    return NextResponse.json(todo, { status: 200 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
