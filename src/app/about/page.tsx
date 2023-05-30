import { FC } from "react";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import { ToastDestructive } from "@/components/toast-destructive";
import Counter from "@/components/counter-component";

interface PageProps {}

const About: FC<PageProps> = ({}) => {
  return (
    <section>
      <ToastSimple />
      <ToastWithAction />
      <ToastDestructive />
      <Counter />
    </section>
  );
};

export default About;
