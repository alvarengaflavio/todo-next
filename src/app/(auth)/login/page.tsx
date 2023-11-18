import UserAuthForm from "@/components/forms/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface PageProps {}

const LoginPage: FC<PageProps> = () => {
  return (
    <section className=" w-full h-full flex flex-col items-center justify-center md:w-4/5 ">
      <UserAuthForm />
    </section>
  );
};

export default LoginPage;
