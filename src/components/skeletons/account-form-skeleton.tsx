import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC } from "react";

interface AccountFormProps {}

const AccountFormSkeleton: FC<AccountFormProps> = ({}: AccountFormProps) => {
  return (
    <form>
      <CardHeader>
        <CardTitle>Conta</CardTitle>
        <CardDescription className="leading-5 text-base sm:leading-6">
          Faça alterações na sua conta aqui. Clique em salvar quando terminar.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative space-y-1">
          <Label htmlFor="name">Nome</Label>

          <Input id="name" placeholder={"carregando..."} disabled />
        </div>

        <div className="relative space-y-1">
          <Label htmlFor="username">Usuário</Label>

          <Input id="username" placeholder={"carregando..."} disabled={true} />
        </div>

        <div className="space-y-1 relative">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder={"carregando..."} disabled />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto w-[10.6rem] " size={"lg"} disabled>
          <Icons.loadingSpinner />
        </Button>
      </CardFooter>
    </form>
  );
};

export default AccountFormSkeleton;
