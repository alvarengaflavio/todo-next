import { prisma } from "@/lib/db/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { BadRequestException } from "@/lib/exceptions";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const { params } = context;
    const body = await req.json();

    if (!params.todoId) throw new BadRequestException("ID não informado");
    if (typeof body.done !== "boolean")
      throw new BadRequestException("Done não informado");

    const data: DonePayload = { done: body.done };
    const where = { id: params.todoId };
    const updatedTodo = await prisma.todo.update({ where, data });

    return NextResponse.json(updatedTodo, {
      status: 200,
    });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

type Context = {
  params: {
    todoId: string;
  };
};

type DonePayload = {
  done: boolean;
};
