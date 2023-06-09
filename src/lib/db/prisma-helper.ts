import { exceptionHandler } from "@/lib/exception-handler";
import { AuthRequiredException } from "@/lib/exceptions";
import { getCurrentUser } from "@/lib/session";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "./db";

export async function getTodosAction() {
  try {
    const orderBy: Prisma.Enumerable<Prisma.TodoOrderByWithRelationInput> = [
      {
        done: "asc",
      },
      {
        createdAt: "desc",
      },
    ];

    const todoList = await prisma.todo.findMany({
      orderBy: orderBy,
    });

    return NextResponse.json(todoList, {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return exceptionHandler(error);
  }
}

export async function postTodoAction(body: Pick<Todo, "title">) {
  try {
    const title = createTodoSchema.parse(body).title;
    const user = await getCurrentUser();

    if (!user) throw new AuthRequiredException("Usuário não autenticado");

    const id = user.id ? user.id : undefined;
    const data = { title, user: { connect: { id } } };
    const newTodo = await prisma.todo.create({ data });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
