"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { ActionType } from "./todo-reducer";
import { Todo } from "@/types";

export type StateType = {
  todos: Todo[];
};

const initialState: StateType = {
  todos: [],
};

const reducer = (state: StateType, action: ActionType) => {
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

export const CounterContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
