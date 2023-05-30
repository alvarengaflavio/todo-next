import { prisma } from "@/lib/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { BadRequestException } from "@/lib/exceptions";
import { createTodoSchema } from "@/lib/zod";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const todoCreateSchema = createTodoSchema;

export async function GET(req: NextRequest) {
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

export async function POST(req: NextRequest) {
  try {
    const json = await req.json(); // data is a JS object with the JSON-parsed body

    if (!json.title) throw new BadRequestException("Título não informado");

    const body = todoCreateSchema.parse(json);
    const data = { title: body.title };
    const newTodo = await prisma.todo.create({ data });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
