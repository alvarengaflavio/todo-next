import UserAuthForm from "@/components/forms/user-auth-form";
import { FC } from "react";

interface PageProps {}

const LoginPage: FC<PageProps> = () => {
  return (
    <section className="w-full md:w-4/5 h-full flex flex-col items-center justify-centers">
      <UserAuthForm />
    </section>
  );
};

export default LoginPage;
