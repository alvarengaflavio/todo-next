import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import { FC } from "react";

interface PageProps {}

const About: FC<PageProps> = ({}) => {
  return (
    <section>
      <ToastSimple />
      <ToastWithAction />
      <ToastDestructive />
    </section>
  );
};

export default About;
