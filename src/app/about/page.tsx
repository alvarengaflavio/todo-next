import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import { getServerSession } from "next-auth";
import { FC } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface PageProps {}

const AboutPage = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <pre>{JSON.stringify(session)}</pre>
      <ToastSimple />
      <ToastWithAction />
      <ToastDestructive />
    </section>
  );
};

export default AboutPage;
