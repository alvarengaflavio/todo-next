import { Todo } from "@/types";
import { StateType } from "./todo-context";

export type ActionType = {
  type: string;
  todos?: Todo[];
  id?: string;
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET":
      if (!action.todos) return state;
      return { ...state, todos: [...action.todos] };

    case "UPDATE":
      if (!action.todos) return state;
      return { ...state, todos: [...state.todos, ...action.todos] };

    case "CHECK":
      return { ...state, todos: [...state.todos] };

    default:
      return state;
  }
};
