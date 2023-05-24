import TodoCard from "@/components/todo-card";
import { TodoSkeleton } from "@/components/todo-skeleton";
import { Suspense } from "react";

interface PageProps {}

const Dashboard = async ({}: PageProps) => {
  // const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // await wait(3000);
  const todoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {todoIds.map((todoId, index) => (
        <Suspense
          key={"suspense" + index}
          fallback={<TodoSkeleton key={"skeleton" + index} />}
        >
          {/* @ts-expect-error Async Server Component */}
          <TodoCard key={"todo" + todoId} id={todoId} />
        </Suspense>
      ))}
    </div>
  );
};

export default Dashboard;

interface TodoProps {
  id: number;
  title: string;
  description: string;
  content: string;
  footer: string;
}
