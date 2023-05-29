"use server";

import { Todo } from "@/types";
import { revalidatePath } from "next/cache";
import api from "./axios";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await api.get("/todo");

    return response.data;
  } catch (error) {
    return [];
  }
};

export const postTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  try {
    const response = await api.post("/todo", todo);

    return response.data;
  } catch (error) {
    return {} as Todo;
  }
};

export const handleTodoDone = async (
  done: boolean,
  todoId: string
): Promise<Todo> => {
  try {
    const response = await api.patch(`/todo/${todoId}/done`, { done });

    return response.data;
  } catch (error) {
    return {} as Todo;
  }
};

export const getTodo = async (todoId: string): Promise<Todo> => {
  try {
    const response = await api.get(`/todo/${todoId}`);

    return response.data;
  } catch (error) {
    return {} as Todo;
  }
};

export const deleteTodo = async (todoId: string): Promise<Todo> => {
  try {
    const response = await api.delete(`/todo/${todoId}`);

    revalidatePath("/");

    return response.data;
  } catch (error) {
    return {} as Todo;
  }
};
