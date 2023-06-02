"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { TodoContext } from "@/context/todo-context";
import { postTodo } from "@/lib/axios-instance";
import { createTodoSchema } from "@/lib/zod";
import { Todo } from "@/types";
import { useContext } from "react";
import { Card } from "./ui/card";

const FormSchema = createTodoSchema;

export function CreateTodoForm() {
  const { dispatch } = useContext(TodoContext);

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      title: "", // Isso é necessário para o formulário ser controlado pelo react-hook-form
    },
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const newTodo = await postTodo({ title: data.title });

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

    dispatch({ type: "ADD_TODO", payload: newTodo as Todo });
    toast({
      title: "Tarefa criada com sucesso!",
    });
  }

  return (
    <Card className="container min-h-[200px]">
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
                  <FormLabel className="text-base font-light" htmlFor="title">
                    CRIAR NOVA TAREFA
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="title"
                      placeholder="nova tarefa"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Aqui você pode criar uma nova tarefa.
                  </FormDescription>
                  <FormMessage className="absolute bottom-5 left-1/2 transform -translate-x-1/2" />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-1">
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
