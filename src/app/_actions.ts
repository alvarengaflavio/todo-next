"use server";

import { prisma } from "@/lib/db";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";
import { revalidatePath } from "next/cache";

export async function createTodoAction(todo: Pick<Todo, "title">) {
  const schema = createTodoSchema;
  const body = schema.parse(todo);
  const data = { title: body.title };
  const newTodo = await prisma.todo.create({ data });
  revalidatePath("/");
  return newTodo;
}
