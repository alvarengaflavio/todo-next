import UserLoginForm from "@/components/user-register-form";
import { FC } from "react";

interface PageProps {}

const LoginPage: FC<PageProps> = () => {
  return (
    <section>
      <UserLoginForm />
    </section>
  );
};

export default LoginPage;
