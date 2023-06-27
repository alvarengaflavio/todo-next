import { TodoEditSkeleton } from "@/components/skeletons/todo-edit-skeleton";
import { FC } from "react";

interface LoadingProps {}

const loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="container flex flex-col items-center">
      <TodoEditSkeleton />
    </div>
  );
};

export default loading;
