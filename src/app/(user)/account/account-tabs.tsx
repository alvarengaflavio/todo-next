"use client";
import { updateUserAction, updateUserPasswordAction } from "@/app/_actions";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { userUpdatePasswordSchema, userUpdateSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AccountTabsProps {}

const AccountTabs: FC<AccountTabsProps> = () => {
  const { data: session, status, update } = useSession();
  const accountForm = useForm<z.infer<typeof userUpdateSchema>>({
    defaultValues: {
      name: session?.user?.name ?? "",
      username: session?.user?.username ?? "",
    },

    resolver: zodResolver(userUpdateSchema),
  });
  const passwordForm = useForm<z.infer<typeof userUpdatePasswordSchema>>({
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },

    resolver: zodResolver(userUpdatePasswordSchema),
  });

  const onAccountSubmit = async (data: z.infer<typeof userUpdateSchema>) => {
    if (!session) return;

    const res = await updateUserAction(data, session);
    if (res.ok) {
      update(data);
      toast({
        title: "Perfil atualizado com sucesso",
      });
    } else {
      toast({
        variant: "destructive",
        title: res.message,
        description: "Por favor, tente novamente.",
      });
    }
  };

  const onPasswordSubmit = async (
    data: z.infer<typeof userUpdatePasswordSchema>
  ) => {
    if (!session) return;
    if (data.newPassword !== data.confirmPassword) return;
    if (data.password === data.newPassword) return;

    const res = await updateUserPasswordAction(data, session);

    if (res.ok) {
      toast({
        title: res.message,
        description: "Efetue login com a nova senha.",
      });

      return signOut({ callbackUrl: "/login" });
    }

    return toast({
      variant: "destructive",
      title: res.message,
      description: "Por favor, tente novamente.",
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
          <Form {...accountForm}>
            <form onSubmit={accountForm.handleSubmit(onAccountSubmit)}>
              <CardHeader>
                <CardTitle>Conta</CardTitle>
                <CardDescription className="leading-5 text-base sm:leading-6">
                  Faça alterações na sua conta aqui. Clique em salvar quando
                  terminar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <FormField
                  control={accountForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative space-y-1">
                      <FormLabel htmlFor="name">Nome</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder={session?.user?.name ?? "carregando..."}
                          disabled={status === "loading" ?? true}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] text-sm text-center font-thin" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={accountForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="relative space-y-1">
                      <FormLabel htmlFor="username">Usuário</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          placeholder={session?.user?.username ?? "@apelido"}
                          disabled={status === "loading" ?? true}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] text-sm text-center font-thin" />
                    </FormItem>
                  )}
                />

                <>
                  <FormItem className="space-y-1 relative">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder={session?.user?.email ?? "carregando..."}
                        disabled
                      />
                    </FormControl>
                  </FormItem>
                </>
              </CardContent>
              <CardFooter>
                {status === "authenticated" ? (
                  <Button type="submit" className="mx-auto " size={"lg"}>
                    Salvar Mudanças
                  </Button>
                ) : (
                  <Button className="mx-auto w-[10.6rem] " size={"lg"} disabled>
                    <Icons.loadingSpinner />
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
              <CardHeader>
                <CardTitle>Senha</CardTitle>
                <CardDescription className="leading-5 text-base sm:leading-6">
                  Altere sua senha aqui. Após salvar, você será desconectado.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <FormField
                  control={passwordForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative space-y-1">
                      <FormLabel htmlFor="password">Senha atual</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] text-sm text-center font-thin" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="relative space-y-1">
                      <FormLabel htmlFor="newPassword">Nova senha</FormLabel>
                      <FormControl>
                        <Input
                          id="newPassword"
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] text-sm text-center font-thin" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="relative space-y-1">
                      <FormLabel htmlFor="confirmPassword">
                        Confirmar nova senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] text-sm text-center font-thin" />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                {status === "authenticated" ? (
                  <Button type="submit" className="mx-auto " size={"lg"}>
                    Salvar Senha
                  </Button>
                ) : (
                  <Button className="mx-auto w-[8.2rem]" size={"lg"} disabled>
                    <Icons.loadingSpinner />
                  </Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export { AccountTabs };
