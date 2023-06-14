import TodoEditPage from "@/components/todo-edit-page";

interface PageProps {}

const TodoPage = async ({}: PageProps) => {
  return (
    <div className="text-center container flex flex-col items-center">
      <TodoEditPage />
    </div>
  );
};

export default TodoPage;
