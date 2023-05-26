"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getDateToLocale } from "@/lib/utils";
import { Todo } from "@/types";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { handleTodoDone } from "@/lib/axios-instance";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = async ({ todo }: TodoCardProps) => {
  const [done, setDone] = useState<boolean>(todo.done);

  const createdAt = getDateToLocale(todo.createdAt);
  const updatedAt = getDateToLocale(todo.updatedAt);

  const handleDone = async () => {
    handleTodoDone(!done, todo.id!);
    setDone(() => !done);
  };

  return (
    <Card className="flex justify-between w-full p-0 min-h-[200px]">
      {done ? (
        <>
          <CardHeader className="flex item-center w-1/12 p-0">
            <div
              id={todo.id}
              onClick={handleDone}
              className="flex items-center justify-center w-8 h-8 rounded-full m-auto cursor-pointer bg-foreground border-transparent transition-colors duration-300 outline-none"
            >
              <Icons.check className="text-background" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
            <div
              onClick={handleDone}
              className="text-3xl mt-20 line-through text-slate-400"
            >
              {todo.title ?? ""}
            </div>
            <div className="text-sm text-slate-300 line-through pb-1 mb-10">
              finalizada em {updatedAt ?? "..."}
            </div>
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader className="flex item-center w-1/12 p-0">
            <div
              id={todo.id}
              onClick={handleDone}
              className="flex items-center justify-center w-8 h-8 rounded-full m-auto cursor-pointer border-2 border-slate-400 transition-colors duration-300 outline-none"
            />
          </CardHeader>
          <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
            <div onClick={handleDone} className="text-3xl mt-20 ">
              {todo.title ?? ""}
            </div>
            <div className="text-sm text-slate-400 pb-1 mb-10">
              criada em {createdAt ?? "..."}
            </div>
          </CardContent>
        </>
      )}

      <CardFooter className="flex justify-around align-bottom p-0 w-1/12">
        <Link
          href={`/todo/${todo.id}`}
          className={buttonVariants({ variant: "outline" })}
          style={{
            height: "1.5rem",
            placeSelf: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <Icons.link className="absolute hover:cursor-pointer" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
