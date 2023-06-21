"use client";
import { Toggle } from "@/components/ui/toggle";
import { FC } from "react";
import Image from "next/image";

interface AvatarsToggleProps {
  avatars: string[];
  setAvatars: (avatars: boolean) => void;
}

const AvatarToggle: FC<AvatarsToggleProps> = ({ avatars, setAvatars }) => {
  return (
    <>
      {avatars.map((avatar, i) => {
        return (
          <Toggle
            variant={"outline"}
            className="w-16 h-16"
            key={`${i + "" + avatar}`}
            defaultPressed={avatar === "01.png" ? true : false}
            onPressedChange={(pressed) => console.log(pressed)}
          >
            <Image
              src={`/avatars/${avatar}`}
              alt={`avatar ${avatar}`}
              width="40"
              height="40"
              className="rounded-full"
            />
          </Toggle>
        );
      })}
    </>
  );
};

export { AvatarToggle };
