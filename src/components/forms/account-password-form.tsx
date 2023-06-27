import { updateUserPasswordAction } from "@/app/_actions";
import { userUpdatePasswordSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { signOut } from "next-auth/react";
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

interface AccountPasswordFormProps {
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
}

const AccountPasswordForm: FC<AccountPasswordFormProps> = ({
  session,
  status,
}: AccountPasswordFormProps) => {
  const passwordForm = useForm<z.infer<typeof userUpdatePasswordSchema>>({
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },

    resolver: zodResolver(userUpdatePasswordSchema),
  });

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
  );
};

export default AccountPasswordForm;
