import TodoCard from "@/components/todo-card";
import { TodoSkeleton } from "@/components/todo-skeleton";
import { prisma } from "@/lib/db";
import { Suspense } from "react";

export default async function Home() {
  const todoList = await prisma.todo.findMany();

  return (
    <main className="flex min-h-screen container flex-col items-center justify-between px-24 py-8">
      <section className="w-3/4">
        <h1 className="text-5xl text-center"> TODO LIST</h1>

        <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5 ">
          {todoList.map((todo) => (
            <Suspense fallback={<TodoSkeleton />}>
              {/* @ts-expect-error Async Server Component */}
              <TodoCard key={todo.id} todo={todo} />
            </Suspense>
          ))}
        </div>
      </section>
    </main>
  );
}
