import { ToastDestructive } from "@/components/toast-destructive";
import { ToastSimple } from "@/components/toast-simple";
import { ToastWithAction } from "@/components/toast-with-action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAccordion from "@/components/accordions/user-accordion";
import AuthButtons from "@/components/user-auth";
import { User } from "@/config/user";

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
            href="https://next-auth.js.org/"
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

        <Card className="w-[90%] max-w-[64rem] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl lg:mb-2 font-bold">
              Autenticação com NextAuth.js
            </CardTitle>
            <CardDescription className="max-w-[90%] leading-5 text-base sm:leading-6">
              NextAuth.js é uma biblioteca de autenticação para Next.js que
              suporta vários provedores de identidade. No caso deste projeto,
              foi utilizado a autenticação por email e senha, com um banco de
              dados para armazenamento de seções e usuários.
            </CardDescription>
          </CardHeader>

          <CardContent className="rounded-md leading-normal max-w-[80%]">
            Para autenticar um usuário, foi utilizado o método{" "}
            <code className="bg-slate-200 dark:bg-slate-800 px-0.5 rounded-sm">
              signIn()
            </code>{" "}
            do NextAuth.js, que recebe como parâmetro um objeto com os campos
            email e password. Caso a autenticação seja bem sucedida, o método
            retorna um objeto com os dados do usuário autenticado. Caso
            contrário, o método retorna um objeto com o erro ocorrido. Você pode
            testar a autenticação através dos botões abaixo. Caso você não tenha
            uma conta, você pode criar uma clicando no botão{" "}
            <strong>Criar Conta</strong> acessível através do botão{" "}
            <strong>Entrar</strong>. Caso já esteja logado, você pode clicar no
            botão <strong>Sair</strong> para encerrar a sessão.
            <AuthButtons className="w-full mx-auto my-6" />
            <UserAccordion className="w-full mx-auto my-6">
              <User />
            </UserAccordion>
          </CardContent>
        </Card>

        <Card className="w-[90%] max-w-[64rem] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl lg:mb-2 font-bold">
              Construção de Interfaces com shadcn/ui
            </CardTitle>

            <CardDescription className="max-w-[90%] leading-5 text-base sm:leading-6">
              shadcn/ui é um conjunto de componentes React com design moderno e
              minimalista. Os componentes são estilizados com{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Tailwind CSS
              </a>
              , um framework CSS de baixo nível que fornece utilitários para
              construção de interfaces customizadas.
            </CardDescription>
          </CardHeader>

          <CardContent className="rounded-md leading-normal max-w-[80%]">
            Os componentes usam como primitivos os componentes do Radix UI, que
            são componentes React acessíveis e com foco em teclado. Você pode
            testar os componentes abaixo. Para mais informações, acesse a
            documentação do{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              shadcn/ui
            </a>
            .
          </CardContent>
          <div id="toasts">
            <ToastSimple />
            <ToastWithAction />
            <ToastDestructive />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutPage;
