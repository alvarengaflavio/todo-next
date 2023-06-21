import { FC } from "react";
import Image from "next/image";

interface PreferencesPageProps {}

import fs from "fs";
import path from "path";

// Caminho absoluto para a pasta public
const publicFolderPath = path.join(process.cwd(), "public");

// Caminho absoluto para a pasta avatars
const avatarsFolderPath = path.join(publicFolderPath, "avatars");

// Função para ler os arquivos dentro da pasta avatars
const readAvatarFiles = async () => {
  try {
    const avatarFiles = await fs.promises.readdir(avatarsFolderPath);
    console.log(avatarFiles);
    // Faça algo com os nomes dos arquivos aqui
    return avatarFiles;
  } catch (error) {
    console.error("Erro ao ler os arquivos da pasta avatars:", error);
  }
};

readAvatarFiles();

const PreferencesPage = async ({}: PreferencesPageProps) => {
  const avatars = await readAvatarFiles();

  if (!avatars) {
    return null;
  }

  return (
    <section className="w-full h-full text-center flex flex-col items-center">
      <h2 className="text-2xl font-thin my-6">PREFERÊNCIAS DE CONTA</h2>

      {avatars.map((avatar, i) => {
        return (
          <div
            className="flex flex-col items-center"
            key={`${i + "" + avatar}`}
          >
            <Image
              src={`/avatars/${avatar}`}
              alt={`avatar ${avatar}`}
              width="40"
              height="40"
            />
            <p className="text-xl font-semibold">{avatar}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PreferencesPage;
