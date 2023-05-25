import { prisma } from "@/lib/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mySearchParam = searchParams.get("search");

    // console.log(mySearchParam);
    const todoList = await prisma.todo.findMany();

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
    const newTodo = await prisma.todo.create({
      data,
    });

    return new Response(JSON.stringify(newTodo), {
      status: 201,
      statusText: "OK",
    });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}
