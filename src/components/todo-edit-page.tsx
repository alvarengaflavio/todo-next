"use client";

import { siteConfig } from "@/config/site";
import { deleteTodo } from "@/lib/axios-helper";
import { Todo } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import TodoEditForm from "./todo-edit-form";
import TodoEditItem from "./todo-edit-item";
import { toast } from "./ui/use-toast";

interface PageProps {
  todoProp?: Todo;
}

const defaultTodo = {
  id: "i",
  title: "Tarefa",
  description: "Carregando...",
  done: false,
  userId: "i",
  createdAt: "2023-05-30T20:25:01.200Z",
  updatedAt: "2023-05-30T20:25:01.200Z",
};

const TodoEditPage: FC<PageProps> = ({ todoProp = defaultTodo }) => {
  const [todo, setTodo] = useState<Todo>(defaultTodo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setTodo(() => todoProp);
    setIsEditing(() => false);
  }, [todoProp]);

  async function handleDelete() {
    if (isEditing) return;
    if (!todo.id) return;

    const status: boolean = await deleteTodo(todo.id);

    if (!status) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir tarefa",
        description: "Tente novamente mais tarde",
      });
      return;
    }

    toast({
      title: "Tarefa excluída com sucesso",
      description: "Redirecionando para a página inicial",
    });

    router.push(siteConfig.mainNav[0].href);
  }

  const handleEditing = () => setIsEditing((prev) => !prev);
  const handleTodo = (todo: Todo) => setTodo(() => todo);

  return (
    <div className="text-center container flex flex-col items-center">
      {isEditing ? (
        <TodoEditForm
          todo={todo}
          handleTodo={handleTodo}
          handleEditing={handleEditing}
        />
      ) : (
        <TodoEditItem
          todo={todo}
          handleDelete={handleDelete}
          handleEditing={handleEditing}
        />
      )}
    </div>
  );
};

export default TodoEditPage;
