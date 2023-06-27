import { updateUserAction } from "@/app/_actions";
import { userUpdateSchema } from "@/lib/zod";
import { Session } from "next-auth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface AccountFormProps {
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
  update: (data: any) => void;
}

const AccountForm: FC<AccountFormProps> = ({
  session,
  status,
  update,
}: AccountFormProps) => {
  const accountForm = useForm<z.infer<typeof userUpdateSchema>>({
    defaultValues: {
      name: session?.user?.name ?? "",
      username: session?.user?.username ?? "",
    },

    resolver: zodResolver(userUpdateSchema),
  });

  const onAccountSubmit = async (data: z.infer<typeof userUpdateSchema>) => {
    if (!session) return;

    if (data.username && data.username[0] !== "@")
      data.username = "@" + data.username;
    if (data.username === session.user.username) delete data?.username;

    const res = await updateUserAction(data, session);
    if (res.ok) {
      update(data);
      toast({
        title: "Perfil atualizado com sucesso",
      });

      accountForm.setValue("username", data.username);
    } else {
      toast({
        variant: "destructive",
        title: res.message,
        description: "Por favor, tente novamente.",
      });
    }
  };

  return (
    <Form {...accountForm}>
      <form onSubmit={accountForm.handleSubmit(onAccountSubmit)}>
        <CardHeader>
          <CardTitle>Conta</CardTitle>
          <CardDescription className="leading-5 text-base sm:leading-6">
            Faça alterações na sua conta aqui. Clique em salvar quando terminar.
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
  );
};

export default AccountForm;
