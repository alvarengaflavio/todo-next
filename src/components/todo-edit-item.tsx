import { getDateToLocale } from "@/lib/utils";
import { Todo } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { DeleteAlertDialog } from "./alert-dialog-delete";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { siteConfig } from "@/config/site";

interface TodoEditItemProps {
  todo: Todo;
  handleDelete: () => void;
  handleEditing: () => void;
}

const TodoEditItem: FC<TodoEditItemProps> = ({
  todo,
  handleEditing,
  handleDelete,
}: TodoEditItemProps) => {
  const date = !todo.done
    ? getDateToLocale(todo.createdAt)
    : getDateToLocale(todo.updatedAt);

  return (
    <>
      <Card className="w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md ">
        <CardHeader className="text-slate-400">TAREFA</CardHeader>
        <CardContent className="text-4xl mt-5 font-bold min-h-[134px]">
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
        <Link
          href={siteConfig.mainNav[1].href}
          className={buttonVariants({ variant: "outline" })}
        >
          Voltar
        </Link>

        <div className="flex gap-x-2">
          <Button variant={"default"} onClick={handleEditing}>
            Editar
          </Button>

          <DeleteAlertDialog handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default TodoEditItem;
