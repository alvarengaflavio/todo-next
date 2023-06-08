"use client";

import { TodoContext } from "@/context/todo-context";
import { cn } from "@/lib/utils";
import { Todo } from "@/types";
import { FC, useContext, useEffect, useState } from "react";
import TodoCard from "./todo-card";
import { getTodos } from "@/lib/axios-helper";
import { TodoSkeleton } from "./todo-skeleton";

interface TodoListProps {
  className?: string;
}

const defaultProps = {
  className: "",
};

export const TodoList: FC<TodoListProps> = ({
  className = defaultProps.className,
  ...props
}: TodoListProps) => {
  const { state, dispatch } = useContext(TodoContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      const todos = await getTodos().catch(() => [] as Todo[]);
      dispatch({ type: "SET_LIST", payload: todos });
      setIsLoaded(() => true);
    };

    getAll();

    return () => {
      setIsLoaded(() => false);
    };
  }, []);

  const handleTodoDone = (id: string) => {
    dispatch({ type: "SET_DONE", payload: id });
  };

  if (!isLoaded) {
    return (
      <div className={cn(className)} {...props}>
        <ul className="space-y-4">
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
        </ul>
      </div>
    );
  }

  return (
    <div className={cn(className)} {...props}>
      <ul className="space-y-4">
        {state.todos.length > 0 ? (
          state.todos.map((todo) => (
            <li key={`todo-${todo.id}`}>
              <TodoCard
                key={todo.id}
                todo={todo}
                handledDone={handleTodoDone}
              />
            </li>
          ))
        ) : (
          <div className="text-center">CRIE SUA PRIMEIRA TAREFA</div>
        )}
      </ul>
    </div>
  );
};

export default TodoCard;
