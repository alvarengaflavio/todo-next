import fs from "fs";
import path from "path";
import { AvatarToggle } from "./avatar-toggle";

interface PreferencesPageProps {}
const publicFolderPath = path.join(process.cwd(), "public");
const avatarsFolderPath = path.join(publicFolderPath, "avatars");

const readAvatarFiles = async () => {
  try {
    const avatarFiles = await fs.promises.readdir(avatarsFolderPath);

    return avatarFiles;
  } catch (error) {
    console.error("Erro ao ler os arquivos da pasta avatars:", error);
  }
};

const PreferencesPage = async ({}: PreferencesPageProps) => {
  const avatars = await readAvatarFiles();

  if (!avatars) {
    return null;
  }

  return (
    <section className="w-full h-full text-center flex flex-col items-center">
      <h2 className="text-2xl font-thin my-6">PREFERÊNCIAS DE CONTA</h2>

      <AvatarToggle avatars={avatars} />
    </section>
  );
};

export default PreferencesPage;
