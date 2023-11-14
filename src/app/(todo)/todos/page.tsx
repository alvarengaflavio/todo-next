import { CreateTodoForm } from "@/components/forms/todo-create-form";
import { TodoList } from "@/components/todo-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen container flex-col items-center justify-between px-2 lg:px-10 2xl:px24 py-4">
      <section className="w-full xl:w-3/4">
        <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5">
          <h1 className="text-5xl text-center font-light"> TODO LIST</h1>
          <CreateTodoForm />
          <TodoList />
        </div>
      </section>
    </main>
  );
}
