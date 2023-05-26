import { FC } from "react";

interface PageProps {
  params: {
    todoId: string;
  };
}

const TodoId: FC<PageProps> = ({ params }) => {
  return (
    <div className="text-center">
      <h2>Todo ID</h2>
      <span>{params.todoId}</span>
    </div>
  );
};

export default TodoId;
