"use client";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import { FC, useState, useMemo } from "react";

interface AvatarsToggleProps {
  avatars: string[];
}

const AvatarToggle: FC<AvatarsToggleProps> = ({ avatars }) => {
  // implementer useMemo to avoid re-rendering
  const [selectedAvatar, setSelectedAvatar] = useState<string>("01.png");
  const pressedAvatar = useMemo(() => selectedAvatar, [selectedAvatar]);

  const handleToggle = (e: HTMLButtonElement) => {
    const { firstChild } = e;
    const { src } = firstChild as HTMLImageElement;
    console.log("firstChild", firstChild);
    console.log("src", decodeURIComponent(src)); // src: http://localhost:3000/_next/image?url=/avatars/01.png&w=96&q=75
    const _avatar = decodeURIComponent(src).split("/").pop()?.split("&")[0]; //avatar 01.png&w=96&q=75 -> avatar 01.png
    console.log("avatar", _avatar);
  };

  return (
    <div className="flex items-center space-x-4 border border-1 p-8 rounded-md">
      {avatars.map((avatar, i) => {
        return (
          <Toggle
            variant={"outline"}
            className="w-16 h-16"
            key={`${avatar}`}
            defaultPressed={avatar === pressedAvatar ? true : false}
            onPressedChange={(pressed) => console.log(pressed)}
            onClick={(e) => handleToggle(e.currentTarget)}
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
    </div>
  );
};

export { AvatarToggle };
