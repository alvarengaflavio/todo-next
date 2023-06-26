"use client";

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
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AuthFormProps {}

const UserAuthForm: FC<AuthFormProps> = ({}) => {
  const form = useForm<z.infer<typeof userAuthSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userAuthSchema),
  });

  async function onSubmit(data: z.infer<typeof userAuthSchema>) {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: `${siteConfig.mainNav[0].href}`,
    });
  }

  return (
    <Card className="p-4 my-4 mx-auto dark:shadow-foreground/10 shadow-md ">
      <CardHeader className="px-0 py-2 text-lg font-normal text-center">
        <span>Faça seu login</span>
      </CardHeader>
      <CardContent className="text-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col h-[280px] min-w-full justify-center items-center">
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
              <Button type="submit" size={"lg"} className="w-full mt-8 h-16">
                Entrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="text-center text-lg text-slate-500 pb-2">
        <span className="min-w-full">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "link" }), "text-blue-700")}
          >
            Cadastre-se
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default UserAuthForm;
