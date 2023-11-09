import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import AuthButtons from "@/components/user-auth";
import { User } from "@/config/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutPage = async () => {
  return (
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-10 lg:py-16"
    >
      <div className="w-full h-full space-y-6 text-center flex flex-col items-center">
        <h1 className="max-w-[64rem] text-2xl font-bold tracking-tighter text-foreground mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          Sobre este Projeto
        </h1>

        <p className="max-w-[64rem] text-lg text-foreground">
          Este projeto foi criado com o objetivo de demonstrar algumas das
          funcionalidades do{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Next.js 14
          </a>{" "}
          como rotas dinâmicas, geração de páginas estáticas, páginas dinâmicas,
          rotas de API e server actions. Para autenticação de usuários, foi
          utilizado o{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            NextAuth.js
          </a>{" "}
          implementado com um banco de dados para armazenamento de seções e
          usuários. Para a construção das componentes de interface, foi
          utilizado o{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            shadcn/ui
          </a>{" "}
          , um conjunto de componentes React com design moderno e minimalista.
        </p>

        <Card className="w-[90%] max-w-[64rem]">
          <AuthButtons />
          <User />
        </Card>

        <div id="toasts">
          <ToastSimple />
          <ToastWithAction />
          <ToastDestructive />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
