"use client";

import { cn } from "@/lib/utils";
import { Todo } from "@/types";
import { FC, useState } from "react";
import TodoCard from "./todo-card";

interface TodoListProps {
  todos: Todo[];
  className?: string;
}

const defaultProps = {
  className: "",
  todos: [] as Todo[],
};

export const TodoList: FC<TodoListProps> = ({
  todos = defaultProps.todos,
  className = defaultProps.className,
  ...props
}: TodoListProps) => {
  const [todoList, setTodoList] = useState<Todo[]>(todos);

  const handleTodoDone = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    // order by done and createdAt
    newTodoList.sort((a, b) => {
      if (a.done === b.done) {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      return a.done ? 1 : -1;
    });

    setTodoList(() => newTodoList);
  };

  return (
    <div className={cn(className)} {...props}>
      <ul className="space-y-4">
        {todoList.map((todo) => (
          <li key={`todo-${todo.id}`}>
            <TodoCard key={todo.id} todo={todo} handledDone={handleTodoDone} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
