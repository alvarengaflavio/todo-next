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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userUpdateSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AccountTabsProps {}

const AccountTabs: FC<AccountTabsProps> = () => {
  const { data: session, status, update } = useSession();
  const form = useForm<z.infer<typeof userUpdateSchema>>({
    defaultValues: {
      name: session?.user?.name ?? "",
      username: session?.user?.username ?? "",
      email: session?.user?.email ?? "",
    },

    resolver: zodResolver(userUpdateSchema),
  });

  const { user } = session || {};

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
          <CardContent className="space-y-2">
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
