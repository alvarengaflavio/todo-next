"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { handleTodoDone } from "@/lib/axios-helper";
import { getDateToLocale } from "@/lib/utils";
import { Todo } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

interface TodoCardProps {
  todo: Todo;
  handledDone: (id: string) => void;
}

const defaultProps = {
  handledDone: () => {},
  todo: {
    id: "",
    title: "",
    done: false,
    createdAt: "",
    updatedAt: "",
  } as Todo,
};

export const TodoCard: FC<TodoCardProps> = ({
  todo = defaultProps.todo,
  handledDone = defaultProps.handledDone,
}) => {
  const done = todo.done;

  const displayDate = !done
    ? getDateToLocale(todo.createdAt)
    : getDateToLocale(todo.updatedAt);

  const handleCardDone = async () => {
    handleTodoDone(!done, todo.id!);
    handledDone(todo.id!);
  };

  return (
    <Card className="flex justify-between w-full p-0 min-h-[200px]">
      {done ? (
        <>
          <CardHeader className="flex item-center w-1/12 p-0">
            <div
              id={todo.id}
              onClick={handleCardDone}
              className="flex items-center justify-center w-8 h-8 rounded-full m-auto cursor-pointer bg-foreground border-transparent transition-colors duration-300 outline-none hover:bg-slate-400"
            >
              <Icons.check className="text-background" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
            <div
              onClick={handleCardDone}
              className="text-3xl mt-20 line-through text-slate-400"
            >
              {todo.title ?? ""}
            </div>
            <div className="text-sm text-slate-300 line-through pb-1 mb-10">
              finalizada em {displayDate ?? "..."}
            </div>
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader className="flex item-center w-1/12 p-0">
            <div
              id={todo.id}
              onClick={handleCardDone}
              className="flex items-center justify-center w-8 h-8 rounded-full m-auto cursor-pointer border-2 border-slate-400 transition-colors  outline-none hover:bg-slate-400 dark:hover:bg-accent hover:border-transparent"
            />
          </CardHeader>
          <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
            <div onClick={handleCardDone} className="text-3xl mt-20 ">
              {todo.title ?? ""}
            </div>
            <div className="text-sm text-slate-400 pb-1 mb-10">
              criada em {displayDate ?? "..."}
            </div>
          </CardContent>
        </>
      )}

      <CardFooter className="flex justify-around align-bottom p-0 w-1/12">
        <Link
          href={`/todo/${todo.id}`}
          className={buttonVariants({ variant: "ghost" })}
          style={{
            height: "2.75rem",
            width: "2.75rem",
            placeSelf: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <Icons.edit className="absolute hover:cursor-pointer" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
