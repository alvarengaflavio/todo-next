"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

interface AuthButtons {
  className?: string;
}

const AuthButtons: FC<AuthButtons> = ({ className }) => {
  return (
    <div className={cn("space-x-2 my-2 ", className)}>
      <Button variant={"default"} onClick={() => signIn()}>
        Entrar
      </Button>
      <Button variant={"outline"} onClick={() => signOut()}>
        Sair
      </Button>
    </div>
  );
};

export default AuthButtons;
