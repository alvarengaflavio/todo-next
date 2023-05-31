import { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { NextResponse } from "next/server";
import { exceptionHandler } from "../exception-handler";
import { Todo } from "@/types";
import { createTodoSchema } from "../zod";

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
    const zBody = createTodoSchema.parse(body);
    const data = { title: body.title };
    const newTodo = await prisma.todo.create({ data });

    console.log("ZOD PARSE:", zBody);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
