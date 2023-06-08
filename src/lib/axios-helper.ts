import { Todo } from "@/types";
import api from "./axios";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await api.get("/todo");

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar todos as tarefas");
    return [];
  }
};

export const postTodo = async (todo: Pick<Todo, "title">) => {
  try {
    const { data } = await api.post("/todo", todo);
    return data;

    // * Entendi, a actions da component chamam este arquivo, aqui ele faz a conexão direta com o banco de dados
    // * exemplo: createTodoAction(todo) -> actions -> serverAction -> api -> banco de dados
    // * code: return = await prisma.todo.create({ data: todo });
  } catch (error) {
    return error;
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
    const { data } = await api.get(`/todo/${todoId}`);
    return data;
  } catch (error) {
    return {} as Todo;
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const { data } = await api.patch(`/todo/${todo.id}`, todo);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    await api.delete(`/todo/${todoId}`);
    return true;
  } catch (error) {
    return false;
  }
};
