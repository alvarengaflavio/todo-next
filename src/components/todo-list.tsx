"use client";

import { TodoContext } from "@/context/todo-context";
import { cn } from "@/lib/utils";
import { Todo } from "@/types";
import { FC, useContext, useEffect } from "react";
import TodoCard from "./todo-card";
import { getTodos } from "@/lib/axios-helper";

interface TodoListProps {
  // todos: Todo[];
  className?: string;
}

const defaultProps = {
  className: "",
  // todos: [] as Todo[],
};

export const TodoList: FC<TodoListProps> = ({
  className = defaultProps.className,
  ...props
}: TodoListProps) => {
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const getAll = async () => {
      const todos = await getTodos();
      dispatch({ type: "SET_LIST", payload: todos });
    };

    getAll();

    return () => {};
  }, []);

  const handleTodoDone = (id: string) => {
    dispatch({ type: "SET_DONE", payload: id });
  };

  return (
    <div className={cn(className)} {...props}>
      {state.todos.length === 0 ? (
        <div className="text-center">CRIE SUA PRIMEIRA TAREFA</div>
      ) : (
        <ul className="space-y-4">
          {state.todos.map((todo) => (
            <li key={`todo-${todo.id}`}>
              <TodoCard
                key={todo.id}
                todo={todo}
                handledDone={handleTodoDone}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoCard;
