import { ToastSimple } from "@/components/toast-simple";
import { CreateTodoForm } from "@/components/todo-create";
import { TodoList } from "@/components/todo-list";
import { getTodos } from "@/lib/axios-helper";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todoList = await getTodos();

  return (
    <main className="flex min-h-screen container flex-col items-center justify-between px-24 py-4">
      <section className="w-3/4">
        <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5">
          <h1 className="text-5xl text-center font-light"> TODO LIST</h1>
          <CreateTodoForm />
          <TodoList todos={todoList} />
        </div>
        <ToastSimple />
      </section>
    </main>
  );
}
