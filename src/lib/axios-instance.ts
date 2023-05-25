import { Todo } from "@/types";
import api from "./axios";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await api.get("/todo");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response = await api.post("/todo", todo);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as Todo;
  }
};
