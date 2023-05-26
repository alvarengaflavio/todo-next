import { prisma } from "@/lib/db";
import { exceptionHandler } from "@/lib/exception-handler";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const data = await req.json(); // data is a JS object with the JSON-parsed body
    const newTodo = await prisma.todo.create({ data });

    return NextResponse.json(newTodo, {
      status: 200,
      statusText: "OK",
    });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

export async function GET(req: NextRequest, context: Context) {
  try {
    const { params } = context;

    console.log(params);

    return NextResponse.json(
      { params },
      {
        status: 200,
      }
    );

    // return NextResponse.json(newTodo, {
    //   status: 200,
    //   statusText: "OK",
    // });
  } catch (error: any) {
    return exceptionHandler(error);
  }
}

type Context = {
  params: {
    todoId: string;
  };
};
