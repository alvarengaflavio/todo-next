"use client";

import { createUserAction } from "@/app/_actions";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { userCreateSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "../ui/use-toast";

interface RegisterFormProps {}

const UserCreateForm: FC<RegisterFormProps> = ({}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof userCreateSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(userCreateSchema),
  });

  async function onSubmit(data: z.infer<typeof userCreateSchema>) {
    if (data.password !== data.confirmPassword) return;

    const res = await createUserAction(data);
    if (!res.ok) {
      toast({
        variant: "destructive",
        title: res.message,
        description: "Por favor, tente novamente.",
      });
      return;
    }

    toast({
      title: "Usuário criado com sucesso!",
      description: "Você já pode efetuar login.",
    });
    router.push("/login");
  }

  return (
    <Card className="p-4 my-4 mx-auto dark:shadow-foreground/10 shadow-md ">
      <CardHeader className="px-0 py-2 text-lg font-normal text-center">
        <span>Crie novo usuário</span>
      </CardHeader>
      <CardContent className="text-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col h-[480px] min-w-full justify-center items-center">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative h-44 flex flex-col w-full">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="email"
                    >
                      Seu Melhor Email
                    </FormLabel>
                    <div className="relative flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="seu@email.com"
                          type="email"
                          className="text-xl font-bold min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 text-sm text-center" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative h-44 flex flex-col w-full">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="name"
                    >
                      Seu Nome
                    </FormLabel>
                    <div className="relative flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Meu Nome da Silva"
                          type="name"
                          className="text-xl font-normal min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 text-sm text-center" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col w-full h-44">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="password"
                    >
                      Senha
                    </FormLabel>
                    <div className="relative mt-0 flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          className="text-4xl font-bold min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-sm text-center" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col w-full h-44">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="confirmPassword"
                    >
                      Confirmar Senha
                    </FormLabel>
                    <div className="relative mt-0 flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="password"
                          className="text-4xl font-bold min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-sm text-center" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-8">
                Registrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="text-center text-lg text-slate-500 pb-2">
        <span className="min-w-full">
          Voltar para a tela de login?{" "}
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "link" }), "text-blue-700")}
          >
            Entrar
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default UserCreateForm;
