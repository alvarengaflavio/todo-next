import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db/db";
import { AuthRequiredException, BadRequestException } from "@/lib/exceptions";
import { getCurrentUser } from "@/lib/session";
import { createTodoSchema } from "@/lib/zod";
import { ISession } from "@/types";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const todoCreateSchema = createTodoSchema;

export async function GET() {
  try {
    const user = await getCurrentUser();
    const session = await getServerSession(authOptions);

    console.log("GET", user, session);
    if (!user) throw new AuthRequiredException("Usuário não autenticado");

    const id = user.id ? user.id : undefined;
    const where: Prisma.TodoWhereInput = { user: { id } };
    const orderBy: Prisma.Enumerable<Prisma.TodoOrderByWithRelationInput> = [
      {
        done: "asc",
      },
      {
        createdAt: "desc",
      },
    ];
    const todoList = await prisma.todo.findMany({ where, orderBy });

    return NextResponse.json(todoList, { status: 200 });
  } catch (error) {
    if (error instanceof AuthRequiredException)
      return NextResponse.json(null, { status: 401 });

    return NextResponse.json(null, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json(); // data is a JS object with the JSON-parsed body

    if (!json.title) throw new BadRequestException("Título não informado");

    const session: Required<ISession> | null = await getServerSession(
      authOptions
    );

    if (!session) throw new AuthRequiredException("Usuário não autenticado");

    const { user } = session;
    const id = user.id ? user.id : undefined;
    const body = todoCreateSchema.parse(json);
    const data = { title: body.title, user: { connect: { id } } };
    const newTodo = await prisma.todo.create({ data });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error: any) {
    if (error instanceof BadRequestException)
      return NextResponse.json(null, { status: 400 });

    if (error instanceof AuthRequiredException)
      return NextResponse.json(null, { status: 401 });

    return NextResponse.json(null, { status: 500 });
  }
}
