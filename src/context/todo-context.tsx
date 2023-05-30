"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { ActionType, reducer } from "./todo-reducer";
import { Todo } from "@/types";

export type StateType = {
  todos: Todo[];
};

const initialState: StateType = {
  todos: [],
};

export const TodoContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
