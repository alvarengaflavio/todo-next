import TodoEditPage from "@/components/todo-edit-page";
import { getTodo } from "@/lib/axios-helper";

interface PageProps {
  params: {
    todoId: string;
  };
}

const TodoPage = async ({ params }: PageProps) => {
  const { todoId } = params;

  const todo = await getTodo(todoId);

  // ? Concertar o aviso de erro:
  // ! Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>.

  return (
    <div className="text-center container flex flex-col items-center">
      <TodoEditPage todoProp={todo} />
    </div>
  );
};

export default TodoPage;
