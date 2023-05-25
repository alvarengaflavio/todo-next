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

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = async ({ todo }: TodoCardProps) => {
  const [done, setDone] = useState<boolean>(todo.done);

  const createdAt = getDateToLocale(todo.createdAt);
  const updatedAt = getDateToLocale(todo.updatedAt);

  return (
    <Card className="flex justify-between w-full p-0 min-h-[200px]">
      <CardHeader className="flex item-center w-1/12 p-0">
        <input
          id={todo.id}
          type="checkbox"
          defaultChecked={done}
          className="m-auto cursor-pointer peer"
          onChange={() => setDone(() => !done)}
        />
      </CardHeader>
      <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
        {done ? (
          <>
            <div className="text-3xl mt-20 line-through text-slate-400">
              {todo.title ?? ""}
            </div>
            <div className="text-sm text-slate-300 line-through pb-1 mb-10">
              finalizada em {updatedAt ?? "..."}
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl mt-20 ">{todo.title ?? ""}</div>
            <div className="text-sm text-slate-400 pb-1 mb-10">
              criada em {createdAt ?? "..."}
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="flex justify-around align-bottom p-0 w-1/12">
        <Link
          href={`/dashboard/${todo.id}`}
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
