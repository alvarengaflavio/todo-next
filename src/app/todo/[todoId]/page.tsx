import { getTodo } from "@/lib/axios-instance";

interface PageProps {
  params: {
    todoId: string;
  };
}

const TodoId = async ({ params }: PageProps) => {
  const todo = await getTodo(params.todoId);
  console.log(todo);

  return (
    <div className="text-center">
      <h2>Todo ID</h2>
      <span>{params.todoId}</span>
      <h2>Todo</h2>
      <div className="flex flex-col">
        <span>{todo.title}</span>
        <span>{todo.done}</span>
        <span>{todo.createdAt}</span>
      </div>
    </div>
  );
};

export default TodoId;
function getTodoById(todoId: string) {
  throw new Error("Function not implemented.");
}
