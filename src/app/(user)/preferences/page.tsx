import { FC } from "react";

interface PreferencesPageProps {}

const PreferencesPage: FC<PreferencesPageProps> = ({}) => {
  return (
    <section className="w-full h-full text-center flex flex-col items-center">
      <h2 className="text-2xl font-thin my-6">PREFERÊNCIAS DE CONTA</h2>
    </section>
  );
};

export default PreferencesPage;
