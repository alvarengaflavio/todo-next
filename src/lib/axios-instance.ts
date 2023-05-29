import { siteConfig } from "@/config/site";
import { Todo } from "@/types";
import { revalidatePath } from "next/cache";
import api from "./axios";
import { createTodoAction } from "@/app/_actions";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await api.get("/todo");

    return response.data;
  } catch (error) {
    return [];
  }
};

export const postTodo = async (todo: Pick<Todo, "title">) => {
  try {
    // ! TODO - Refatorar para usar a action ou compartilhar o state de todoList entre as components
    const newTodo = await createTodoAction(todo);

    return newTodo;
    // const newTodo = await api.post("/todo", body);
    // return newTodo.data;
  } catch (error) {
    console.error(error);
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

export const deleteTodo = async (todoId: string) => {
  try {
    await api.delete(`/todo/${todoId}`);
  } catch (error) {
    return {} as Todo;
  }
};
