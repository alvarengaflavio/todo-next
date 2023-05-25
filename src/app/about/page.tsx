import { FC } from "react";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import { ToastDestructive } from "@/components/toast-destructive";

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
