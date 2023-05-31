"use server";

import { prisma } from "@/lib/db/db";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";

export async function createTodoAction(todo: Pick<Todo, "title">) {
  const schema = createTodoSchema;
  const body = schema.parse(todo);
  const data = { title: body.title };

  // * daqui o action deveria chamar o arquivo que lida com o prisma com await e depois revalidate em revalidatePatch("/")

  return await prisma.todo.create({ data });
}
