"use client";
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
import { FC } from "react";

interface AccountTabsProps {}

const AccountTabs: FC<AccountTabsProps> = () => {
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
              <Input id="name" defaultValue="Flávio Alvarenga" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Usuário</Label>
              <Input id="username" defaultValue="@alvarenga" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="alvarenga@email.com"
                disabled
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="mx-auto md:mx-0">Salvar Mudanças</Button>
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
            <Button className="mx-auto md:mx-0">Salvar Senha</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export { AccountTabs };
