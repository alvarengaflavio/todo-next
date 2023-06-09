import { Todo } from "@/types";

export const defaultTodo = {
  id: "i",
  title: "Tarefa",
  description: "Carregando...",
  done: false,
  userId: "random-user-id",
  createdAt: "2023-05-30T20:25:01.200Z",
  updatedAt: "2023-05-30T20:25:01.200Z",
};

export function sortTodoList(todos: Todo[]) {
  return todos.sort((a, b) => {
    if (a.done === b.done) {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
    return a.done ? 1 : -1;
  });
}
