"use client";

import { DeleteTodoBtn } from "@/components/todo-delete-button";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { deleteTodo, getTodo } from "@/lib/axios-instance";
import { getDateToLocale } from "@/lib/utils";
import { Todo } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PageProps {
  params: {
    todoId: string;
  };
}

const defaultTodo = {
  id: "",
  title: "",
  description: "",
  done: false,
  createdAt: "",
  updatedAt: "",
};

const TodoPage = ({ params }: PageProps) => {
  const [todo, setTodo] = useState<Todo>(defaultTodo);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const _todo = await getTodo(params.todoId);
      console.log(_todo);
      setTodo(() => _todo);
      setIsLoading(() => false);
    }

    load();

    return () => {};
  }, []);

  async function handleDelete() {
    if (isLoading) return;
    if (!todo.id) return;

    await deleteTodo(todo.id);
    router.push(siteConfig.mainNav[0].href);
  }

  return (
    <div className="text-center container flex flex-col items-center">
      <Card className="w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md ">
        <CardHeader className="text-slate-400">TAREFA</CardHeader>
        <CardContent className="text-4xl">
          <span>{todo.title}</span>
        </CardContent>

        <CardDescription className="text-xl">
          <span>{todo.done ? `Completa` : `Incompleta`}</span>
        </CardDescription>

        <CardFooter className="text-center text-lg text-slate-500">
          <span className="min-w-full">
            {todo.done
              ? `Finalizada em ${getDateToLocale(todo.updatedAt)}`
              : `Criada em ${getDateToLocale(todo.createdAt)}`}
          </span>
        </CardFooter>
      </Card>

      <div className="text-4xl w-3/4 font-bold my-2 flex justify-between gap-2">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Voltar
        </Link>

        <div className="flex gap-x-2">
          <Button variant={"default"}>Editar</Button>

          <DeleteTodoBtn handleDelete={handleDelete}>Excluir</DeleteTodoBtn>
          {/* <Button variant={"destructive"} onClick={handleDelete}>
            Excluir
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
