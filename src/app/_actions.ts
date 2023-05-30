"use server";

import { prisma } from "@/lib/db";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";

export async function createTodoAction(todo: Pick<Todo, "title">) {
  const schema = createTodoSchema;
  const body = schema.parse(todo);
  const data = { title: body.title };

  return await prisma.todo.create({ data });
}
