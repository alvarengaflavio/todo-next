import { Todo } from "@/types";
import { StateType } from "./todo-context";
import { sortTodoList } from "@/lib/utils";

export type ActionType = {
  type: string;
  payload?: Todo[] | string;
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_LIST":
      if (!(action.payload instanceof Array)) return state;
      return { ...state, todos: [...action.payload] };

    case "UPDATE_LIST":
      if (!(action.payload instanceof Array)) return state;
      return { ...state, todos: [...state.todos, ...action.payload] };

    case "SET_DONE":
      if (!(typeof action.payload === "string")) return state;

      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });

      sortTodoList(state.todos);
      console.log("SET_DONE", state.todos);

      return { ...state, todos: [...state.todos] };

    default:
      return state;
  }
};
