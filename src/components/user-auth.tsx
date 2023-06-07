"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

interface AuthButtons {}

const AuthButtons: FC<AuthButtons> = ({}) => {
  return (
    <div className="flex items-center space-x-2 my-2">
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
