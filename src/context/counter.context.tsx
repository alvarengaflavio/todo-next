"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { ActionType, reducer } from "./counter.reducer";

export type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
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
