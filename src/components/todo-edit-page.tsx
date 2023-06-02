"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { deleteTodo } from "@/lib/axios-instance";
import { getDateToLocale } from "@/lib/utils";
import { Todo } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { DeleteTodoBtn } from "./todo-delete-button";
import { Button, buttonVariants } from "./ui/button";
import { toast } from "./ui/use-toast";

interface PageProps {
  todoProp?: Todo;
}

const defaultTodo = {
  id: "i",
  title: "Tarefa",
  description: "Carregando...",
  done: false,
  createdAt: "2023-05-30T20:25:01.200Z",
  updatedAt: "2023-05-30T20:25:01.200Z",
};

const TodoEditPage: FC<PageProps> = ({ todoProp = defaultTodo }) => {
  const [todo, setTodo] = useState<Todo>(defaultTodo);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const date = !todo.done
    ? getDateToLocale(todo.createdAt)
    : getDateToLocale(todo.updatedAt);

  useEffect(() => {
    setTodo(() => todoProp);
    setIsLoading(() => false);
  }, []);

  async function handleDelete() {
    if (isLoading) return;
    if (!todo.id) return;

    const status: boolean = await deleteTodo(todo.id);

    if (!status) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir tarefa",
        description: "Tente novamente mais tarde",
      });
    }

    toast({
      title: "Tarefa excluída com sucesso",
      description: "Redirecionando para a página inicial",
    });

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
            {todo.done ? `Finalizada em ${date}` : `Criada em ${date}`}
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
        </div>
      </div>
    </div>
  );
};

export default TodoEditPage;
