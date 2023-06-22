"use client";
import { updateAvatarAction } from "@/app/_actions";
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
import { Toggle } from "@/components/ui/toggle";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useMemo, useState } from "react";

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

    if (session?.user?.image === selectedAvatar) return;
    if (!selectedAvatar) return;

    const response = await updateAvatarAction(selectedAvatar, session);
    if (!response.ok) {
      return toast({ title: "Erro ao salvar avatar", variant: "destructive" });
    }

    await update({ image: selectedAvatar });
    toast({ title: "Avatar salvo com sucesso" });
  };

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
        {status === "authenticated" ? (
          <Button size={"lg"} onClick={handleSave}>
            Salvar Avatar
          </Button>
        ) : (
          <Button size={"lg"} className="w-[9.2rem]" disabled>
            <Icons.loadingSpinner />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { AvatarToggle };
