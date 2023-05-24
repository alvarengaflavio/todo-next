import EditTodoCard from "@/components/edit-todo-card";
import axios from "axios";

export async function generateStaticParams() {
  const posts = [1, 2, 3];

  return posts.map((post) => ({
    postId: String(String(post)),
  }));
}
interface PageProps {
  params: {
    postId: string;

    searchParams?: {
      searchParams: string;
    };
  };
}

const TodoById = async ({ params }: PageProps) => {
  const { postId } = params;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );

  const todoProps: TodoProps = {
    id: data.id,
    title: `TODO #${data.id}`,
    description: `TODO criada em ${Date.now()}`,
    content: data.title,
    footer: `${data.completed}`,
  };

  return (
    <>
      <EditTodoCard {...todoProps} />
    </>
  );
};

export default TodoById;

interface TodoProps {
  id: number;
  title: string;
  description: string;
  content: string;
  footer: string;
}
