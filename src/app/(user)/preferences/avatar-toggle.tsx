"use client";
import { updateAvatarAction } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useState, useMemo } from "react";

interface AvatarsToggleProps {
  avatars: string[];
  className?: string;
}

const AvatarToggle: FC<AvatarsToggleProps> = ({ avatars, className }) => {
  const { data: session, status, update } = useSession();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const pressedAvatar = useMemo(() => selectedAvatar, [selectedAvatar]);

  const handleToggle = (e: HTMLButtonElement) => {
    const { firstChild } = e;
    const { src } = firstChild as HTMLImageElement;
    const avatarName = decodeURIComponent(src).split("/")?.pop()?.split("&")[0];

    avatarName && setSelectedAvatar(() => avatarName);
  };

  const handleSave = async () => {
    if (!session) {
      return toast({
        title: "Você não está logado",
        variant: "destructive",
      });
    }

    if (!selectedAvatar) {
      return toast({
        title: "Selecione um avatar para salvar",
        variant: "destructive",
      });
    }

    console.log("Avatar selecionado:", selectedAvatar);
    // todo - salvar avatar no banco de dados
    // todo - pegar sessão do usuário e salvar o avatar
    // todo - adicionar loading page
    // todo - adicionar toast de sucesso
    // todo - adicionar toast de erro
    // todo - talvez adicionar loading no botão

    await updateAvatarAction(selectedAvatar, session)
      .catch((error) => {
        console.error("Erro ao salvar avatar:", error);
      })
      .then(() => {
        toast({
          title: "Avatar salvo com sucesso",
        });
      });

    await update({ image: selectedAvatar });
  };

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return <div>Você não está logado</div>;
  }

  return (
    <Card
      className={cn(
        "flex flex-col items-center border border-border px-4 w-[300px] sm:w-[400px] lg:w-[400px]",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="">Selecionar Avatar</CardTitle>
        <CardDescription className="text-center leading-5 text-base sm:leading-6">
          Escolha um avatar para que seus amigos possam te identificar
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-2 py-8 justify-items-center place-items-center sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-transparent rounded-md">
        {avatars.map((avatar, i) => {
          return (
            <Toggle
              variant={"outline"}
              className="w-16 h-16 px-2 bg-background data-[state=on]:bg-primary transition-colors ease-in"
              key={`${i} + "" + ${avatar}`}
              pressed={avatar === pressedAvatar ? true : false}
              onClick={(e) => handleToggle(e.currentTarget)}
            >
              <Image
                src={`/avatars/${avatar}`}
                alt={`avatar ${avatar}`}
                width="40"
                height="40"
                className="rounded-full w-full"
              />
            </Toggle>
          );
        })}
      </CardContent>

      <CardFooter className=" mt-8">
        <Button size={"lg"} onClick={handleSave}>
          Salvar Avatar
        </Button>
      </CardFooter>
    </Card>
  );
};

export { AvatarToggle };
