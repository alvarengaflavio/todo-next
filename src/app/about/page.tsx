import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import { User } from "@/config/user";

const AboutPage = async () => {
  // const session = await getServerSession(authOptions);

  return (
    <section>
      {/* <pre>{JSON.stringify(session)}</pre> */}
      <User />
      <ToastSimple />
      <ToastWithAction />
      <ToastDestructive />
    </section>
  );
};

export default AboutPage;
