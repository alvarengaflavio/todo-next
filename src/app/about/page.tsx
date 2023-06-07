import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import AuthButtons from "@/components/user-auth";
import { User } from "@/config/user";

const AboutPage = async () => {
  return (
    <section>
      <h1>About</h1>
      <AuthButtons />
      <User />
      <ToastSimple />
      <ToastWithAction />
      <ToastDestructive />
    </section>
  );
};

export default AboutPage;
