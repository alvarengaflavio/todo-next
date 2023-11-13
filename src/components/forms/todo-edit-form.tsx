import { siteConfig } from "@/config/site";
import { updateTodo } from "@/lib/axios-helper";
import { getDateToLocale } from "@/lib/utils";
import { updateTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Toggle } from "../ui/toggle";
import { toast } from "../ui/use-toast";

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
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.done ?? false);

  const form = useForm<z.infer<typeof updateTodoSchema>>({
    defaultValues: {
      title: todo.title ?? "",
      done: todo.done ?? false,
    },
    resolver: zodResolver(updateTodoSchema),
  });
  const date = !todo.done
    ? getDateToLocale(todo.createdAt)
    : getDateToLocale(todo.updatedAt);

  async function onSubmit(data: z.infer<typeof updateTodoSchema>) {
    if (todo.title === data.title && todo.done === isCompleted) {
      handleEditing();
      return toast({ title: "Nada foi alterado!" });
    }

    const _todo = { ...todo, title: data.title, done: isCompleted };
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
        <CardContent className="text-4xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="flex h-[250px] min-w-full justify-center items-center space-x-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="relative flex flex-col w-full h-[250px] space-y-14">
                      <FormLabel
                        className="text-xl font-light mt-2"
                        htmlFor="title"
                      >
                        ATUALIZAR TAREFA
                      </FormLabel>
                      <div className="relative mt-10 flex flex-col w-full justify-start">
                        <FormControl>
                          <Input
                            id="title"
                            placeholder="atualizar tarefa"
                            type="text"
                            className="text-4xl font-bold min-w-full text-center"
                            autoFocus={true}
                            onKeyUp={(e) => {
                              if (e.key === "Escape") handleEditing();
                            }}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Entre com o texto atualizado
                        </FormDescription>
                      </div>
                      <FormMessage className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base" />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>

        <CardDescription className="text-xl -mt-12 p-0">
          <Toggle
            variant={"default"}
            className="px-2 translate-y-[-6px] text-xl text-primary font-normal bg-background data-[state=on]:bg-primary data-[state=on]:text-secondary transition-colors ease-in outline outline-2 outline-slate-400"
            pressed={isCompleted}
            onClick={() => {
              setIsCompleted(() => !isCompleted);
            }}
          >
            {isCompleted ? `Completa` : `Incompleta`}
          </Toggle>
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
