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

interface AccountPasswordFormProps {}

const AccountPasswordSkeleton: FC<
  AccountPasswordFormProps
> = ({}: AccountPasswordFormProps) => {
  return (
    <form>
      <CardHeader>
        <CardTitle>Senha</CardTitle>
        <CardDescription className="leading-5 text-base sm:leading-6">
          Altere sua senha aqui. Após salvar, você será desconectado.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative space-y-1">
          <Label htmlFor="password">Senha atual</Label>
          <Input id="password" type="password" placeholder="********" />
        </div>

        <div className="relative space-y-1">
          <Label htmlFor="newPassword">Nova senha</Label>
          <Input id="newPassword" type="password" placeholder="********" />
        </div>

        <div className="relative space-y-1">
          <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
          <Input id="confirmPassword" type="password" placeholder="********" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto w-[8.2rem]" size={"lg"} disabled>
          <Icons.loadingSpinner />
        </Button>
      </CardFooter>
    </form>
  );
};

export default AccountPasswordSkeleton;
