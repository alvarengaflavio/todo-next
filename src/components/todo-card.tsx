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

interface PageProps {
  todo: Todo;
}

const TodoCard = async (props: PageProps) => {
  const { todo } = props;
  const createdAt = getDateToLocale(todo.createdAt);

  const fakeDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await fakeDelay(Math.random() * 5000 + 5);

  return (
    <Card className="flex justify-between w-full p-0 min-h-[200px]">
      <CardHeader className="p-0 w-1/12">
        <input type="checkbox" defaultChecked={todo.done} className="m-auto" />
      </CardHeader>

      <CardContent className="flex flex-col flex-1 p-0 justify-between text-center w-10/12">
        <div className="text-3xl mt-20"> {todo.title ?? "Card Title"}</div>
        <div className="text-sm text-slate-400 pb-1 mb-10">
          criada em {createdAt ?? "..."}
        </div>
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
