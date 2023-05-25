import { Todo } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;

export const getTodos = async () => {
  try {
    const response = await api.get("/api/todo");
    return response.data;
  } catch (error) {
    return { error };
  }
};

export const postTodo = async (todo: Todo) => {
  try {
    const response = await api.post("/api/todo", todo);
    return response.data;
  } catch (error) {
    return { error };
  }
};
