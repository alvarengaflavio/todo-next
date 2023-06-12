"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUserSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface RegisterFormProps {}

const UserLoginForm: FC<RegisterFormProps> = ({}) => {
  const form = useForm<z.infer<typeof createUserSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(createUserSchema),
  });

  async function onSubmit(data: z.infer<typeof createUserSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md ">
      <CardContent className="text-4xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex h-[250px] min-w-full justify-center items-center space-x-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col w-full h-[250px] space-y-14">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="email"
                    >
                      Seu Melhor Email
                    </FormLabel>
                    <div className="relative mt-10 flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="seu@email.com"
                          type="email"
                          className="text-4xl font-bold min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col w-full h-[250px] space-y-14">
                    <FormLabel
                      className="text-xl font-light mt-2"
                      htmlFor="password"
                    >
                      Senha
                    </FormLabel>
                    <div className="relative mt-10 flex flex-col w-full justify-start">
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          className="text-4xl font-bold min-w-full text-center"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base" />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="text-center text-lg text-slate-500">
        <span className="min-w-full">
          Não tem uma conta?{" "}
          <Link
            href="/auth/register"
            className={buttonVariants({ variant: "link" })}
          >
            Cadastre-se
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default UserLoginForm;
