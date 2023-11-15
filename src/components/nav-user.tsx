"use client";

import { CreditCard, LogOut, PlusCircle, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function UserNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="h-8 w-8 rounded-full " />;
  }

  if (status === "unauthenticated") {
    return (
      <Button variant="default" className="h-8" onClick={() => signIn()}>
        Entrar
      </Button>
    );
  }

  const avatarUrl = session?.user?.image
    ? "/avatars/" + session?.user?.image
    : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarUrl} alt="avatar do usuário" />
            <AvatarFallback>
              {session?.user?.name
                ? session?.user?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .substring(0, 2)
                : "AV"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name ?? "usuário"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email ?? "email"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/account"}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
              <DropdownMenuShortcut>P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={"/pricing"}>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Pagamento</span>
              <DropdownMenuShortcut>B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={"/preferences"}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuração</span>
              <DropdownMenuShortcut>C</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Nova Tarefa</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
          <DropdownMenuShortcut>S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
