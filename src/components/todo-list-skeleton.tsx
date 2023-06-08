import { cn } from "@/lib/utils";
import { FC } from "react";
import { TodoSkeleton } from "./todo-skeleton";

interface TodoListSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const TodoListSkeleton: FC<TodoListSkeletonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      <ul className="space-y-4">
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
        <TodoSkeleton />
      </ul>
    </div>
  );
};

export { TodoListSkeleton };
