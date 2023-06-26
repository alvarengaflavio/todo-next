"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { userUpdateSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AccountTabsProps {}

const AccountTabs: FC<AccountTabsProps> = () => {
  const { data: session, status, update } = useSession();
  const { user } = session || {};
  const form = useForm<z.infer<typeof userUpdateSchema>>({
    defaultValues: {
      name: user?.name ?? "",
      username: user?.username ?? "",
      email: user?.email ?? "",
    },

    resolver: zodResolver(userUpdateSchema),
  });

  const onSubmit = async (data: z.infer<typeof userUpdateSchema>) => {
    // const res = await update(data);
    // if (res.ok) {
    //   toast({
    //     title: "Conta atualizada com sucesso!",
    //     description: "Você já pode efetuar login.",
    //   });
    // } else {
    //   toast({
    //     variant: "destructive",
    //     title: res.message,
    //     description: "Por favor, tente novamente.",
    //   });
    // }

    toast({
      title: JSON.stringify(data),
      description: "Você já pode efetuar login.",
    });
  };

  return (
    <Tabs
      defaultValue="account"
      className="w-[300px] sm:w-[400px] lg:w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Conta</CardTitle>
            <CardDescription className="leading-5 text-base sm:leading-6">
              Faça alterações na sua conta aqui. Clique em salvar quando
              terminar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    defaultValue={user?.name ?? "carregando..."}
                    disabled={status === "loading" ?? true}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Usuário</Label>
                  <Input
                    id="username"
                    defaultValue={user?.username ?? ""}
                    placeholder="@apelido"
                    disabled={status === "loading" ?? true}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email ?? "carregando..."}
                    disabled
                  />
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            {status === "authenticated" ? (
              <Button className="mx-auto " size={"lg"}>
                Salvar Mudanças
              </Button>
            ) : (
              <Button className="mx-auto w-[10.6rem] " size={"lg"} disabled>
                <Icons.loadingSpinner />
              </Button>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Senha</CardTitle>
            <CardDescription className="leading-5 text-base sm:leading-6">
              Altere sua senha aqui. Após salvar, você será desconectado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Senha atual</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Nova senha</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm">Confirmar nova senha</Label>
              <Input id="confirm" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            {status === "authenticated" ? (
              <Button className="mx-auto " size={"lg"}>
                Salvar Senha
              </Button>
            ) : (
              <Button className="mx-auto w-[8.2rem]" size={"lg"} disabled>
                <Icons.loadingSpinner />
              </Button>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export { AccountTabs };
