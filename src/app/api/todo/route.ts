import { prisma } from "@/lib/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { BadRequestException } from "@/lib/exceptions";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const { searchParams } = new URL(req.url);
    // const mySearchParam = searchParams.get("search");
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
    const data = await req.json(); // data is a JS object with the JSON-parsed body

    if (!data.title) throw new BadRequestException("Título não informado");
    if (typeof data.title !== "string")
      throw new BadRequestException("Título deve ser uma string");

    const newTodo = await prisma.todo.create({ data });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
