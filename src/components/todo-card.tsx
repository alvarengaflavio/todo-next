import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Todo } from "@/types";
import axios from "axios";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { getDateToLocale } from "@/lib/utils";

interface PageProps {
  id: number;
}

const TodoCard = async (props: PageProps) => {
  const { id } = props;

  const fakeDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await fakeDelay(Math.random() * 5000 + 5);

  const getTodo = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return data as Todo;
  };

  const data: Todo = await getTodo();

  const { title, description, content, footer } = {
    title: `TODO #${data.id}`,
    description: `criada em ${getDateToLocale(Date.now())}`,
    content: data.title,
    footer: `${data.completed}`,
  };

  return (
    <Card className="flex flex-col justify-between align-bottom">
      <CardHeader>
        <CardTitle className="text-center">
          {title ? title : "Card Title"}
        </CardTitle>
        <CardDescription className="text-center">
          {description ? description : "Card Description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center">{content ? content : "Card Content"}</p>
      </CardContent>
      <CardContent>
        <p className="text-center">
          {footer === "true" ? "Completa" : "Incompleta"}
        </p>
      </CardContent>
      <CardFooter className="flex justify-around align-bottom">
        <Link
          href={`/dashboard/${id}`}
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
