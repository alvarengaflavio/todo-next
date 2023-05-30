import { StateType } from "./counter.context";

export type ActionType = {
  type: string;
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
