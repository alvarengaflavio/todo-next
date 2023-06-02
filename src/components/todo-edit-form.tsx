import { updateTodo } from "@/lib/axios-instance";
import { getDateToLocale } from "@/lib/utils";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

interface TodoEditItemProps {
  todo: Todo;
  handleEditing: () => void;
  handleTodo: (todo: Todo) => void;
}

const TodoEditForm: FC<TodoEditItemProps> = ({
  todo,
  handleEditing,
  handleTodo,
}: TodoEditItemProps) => {
  const form = useForm<z.infer<typeof createTodoSchema>>({
    defaultValues: {
      title: todo.title,
    },
    resolver: zodResolver(createTodoSchema),
  });
  const date = !todo.done
    ? getDateToLocale(todo.createdAt)
    : getDateToLocale(todo.updatedAt);

  async function onSubmit(data: z.infer<typeof createTodoSchema>) {
    const _todo = { ...todo, ...data };
    const newTodo = await updateTodo(_todo);

    if (!newTodo || newTodo instanceof Error)
      return toast({
        title: "Ocorreu um erro ao criar a tarefa",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(newTodo ?? "indefinido", null, 2)}
            </code>
          </pre>
        ),
      });

    toast({
      title: "Tarefa atualizada!",
    });
    handleTodo({ ...newTodo, updatedAt: new Date() });
    handleEditing();
  }

  return (
    <>
      <Card className="w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md ">
        <CardHeader className="text-slate-400">TAREFA</CardHeader>
        <CardContent className="text-4xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-3/4 space-y-6"
            >
              <div className="flex h-[200px] w-[750px] justify-center items-center space-x-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full h-[200px] flex flex-col justify-center relative">
                      <FormLabel
                        className="text-base font-light"
                        htmlFor="title"
                      >
                        ATUALIZAR TAREFA
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          placeholder="atualizar tarefa"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Entre com o novo texto desta tarefa.
                      </FormDescription>
                      <FormMessage className="absolute bottom-5 left-1/2 transform -translate-x-1/2" />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
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
          <Button variant={"secondary"} onClick={handleEditing}>
            Cancelar
          </Button>

          <Button variant={"default"} onClick={form.handleSubmit(onSubmit)}>
            Salvar
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoEditForm;
