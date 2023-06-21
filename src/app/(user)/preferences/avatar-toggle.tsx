"use client";
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
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState, useMemo } from "react";

interface AvatarsToggleProps {
  avatars: string[];
  className?: string;
}

const AvatarToggle: FC<AvatarsToggleProps> = ({ avatars, className }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const pressedAvatar = useMemo(() => selectedAvatar, [selectedAvatar]);

  const handleToggle = (e: HTMLButtonElement) => {
    const { firstChild } = e;
    const { src } = firstChild as HTMLImageElement;
    const avatarName = decodeURIComponent(src).split("/")?.pop()?.split("&")[0];

    avatarName && setSelectedAvatar(() => avatarName);
  };

  return (
    <Card
      className={cn(
        "flex flex-col items-center border border-border px-4 w-[300px] sm:w-[400px] lg:w-[400px]",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="">Escolha seu Avatar</CardTitle>
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
        <Button>Salvar Avatar</Button>
      </CardFooter>
    </Card>
  );
};

export { AvatarToggle };
