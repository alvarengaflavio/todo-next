"use client";

import { Todo } from "@/types";
import { StateType } from "./todo-context";
import { sortTodoList } from "@/lib/todo";

export type ActionType = {
  type: string;
  payload?: Todo[] | Todo | string;
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_LIST":
      if (!(action.payload instanceof Array)) return state;

      return { ...state, todos: [...action.payload] };

    case "ADD_TODO":
      if (!(action.payload instanceof Object) || !("title" in action.payload)) {
        return state;
      }

      return { ...state, todos: [action.payload, ...state.todos] };

    case "SET_DONE":
      if (typeof action.payload !== "string") return state;
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
      sortTodoList(state.todos);
      console.log("atualizando lista de tarefas");
      console.table(state.todos);

      return { ...state, todos: [...state.todos] };

    case "DELETE_TODO":
      if (typeof action.payload !== "string") return state;
      const todos = state.todos.filter((todo) => todo.id !== action.payload);

      return { ...state, todos };

    case "EDIT_TODO":
      if (
        !(action.payload instanceof Object) ||
        !("title" in action.payload) ||
        !("id" in action.payload)
      ) {
        return state;
      }

      const _update: Pick<Todo, "id" | "title"> = {
        id: action.payload.id,
        title: action.payload.title,
      };

      state.todos.forEach((todo) => {
        if (todo.id === _update.id) {
          return { ...todo, title: _update.title };
        }
        return todo;
      });

      return state;

    default:
      return state;
  }
};
