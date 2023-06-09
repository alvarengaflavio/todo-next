"use client";

import { siteConfig } from "@/config/site";
import { deleteTodo, getTodo } from "@/lib/axios-helper";
import { Todo } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import TodoEditForm from "./todo-edit-form";
import TodoEditItem from "./todo-edit-item";
import { toast } from "./ui/use-toast";
import { defaultTodo } from "@/lib/todo";

interface PageProps {}

const TodoEditPage: FC<PageProps> = ({}) => {
  const [todo, setTodo] = useState<Todo>(defaultTodo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();
  const { todoId } = params;

  useEffect(() => {
    setIsEditing(() => false);
    const getOnLoad = async () => {
      const todo = await getTodo(todoId);

      if (!todo) {
        toast({
          variant: "destructive",
          title: "Oops, tarefa não encontrada",
          description: "Voltando para a página inicial",
        });
        router.push(siteConfig.mainNav[0].href);
        return;
      }

      setTodo(() => todo);
    };

    getOnLoad();

    return () => {
      setTodo(() => defaultTodo);
      setIsEditing(() => false);
    };
  }, []);

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
