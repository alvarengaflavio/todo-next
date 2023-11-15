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
import BaseAccordion from "@/components/accordions/base-accordion";
import { siteConfig } from "@/config/site";
import Link from "next/link";

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
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Next.js 14
          </Link>{" "}
          como rotas dinâmicas, geração de páginas estáticas, páginas dinâmicas,
          rotas de API e server actions. Para autenticação de usuários, foi
          utilizado o{" "}
          <Link
            href="https://next-auth.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            NextAuth.js
          </Link>{" "}
          implementado com um banco de dados para armazenamento de seções e
          usuários. Para a construção das componentes de interface, foi
          utilizado o{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            shadcn/ui
          </Link>{" "}
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
            <BaseAccordion
              title="Precisar Entrar ou Sair?"
              className="w-full mx-auto my-6"
            >
              Use os botões abaixo para testar a autenticação.
              <AuthButtons className="w-full mx-auto my-6" />
            </BaseAccordion>
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
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Tailwind CSS
              </Link>
              , um framework CSS de baixo nível que fornece utilitários para
              construção de interfaces customizadas.
            </CardDescription>
          </CardHeader>

          <CardContent className="rounded-md leading-normal max-w-[80%]">
            Os componentes usam como primitivos os componentes do Radix UI, que
            são componentes React acessíveis e com foco em teclado. Você pode
            testar os componentes abaixo. Para mais informações, acesse a
            documentação do{" "}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              shadcn/ui
            </Link>
            .
            <BaseAccordion
              title="Mostrar Componentes Toast construídos com shadcn/ui"
              className="w-full mx-auto my-6"
            >
              Seguem abaixo alguns exemplos de componentes Toast do shadcn/ui. O
              componente Toast é um componente de notificação que pode ser
              utilizado para exibir mensagens de sucesso, erro, alerta e
              informativas.
              <div className="w-full flex align-middle justify-center gap-2 mt-6 mb-4">
                <ToastSimple />
                <ToastWithAction />
                <ToastDestructive />
              </div>
            </BaseAccordion>
          </CardContent>
        </Card>

        <Card className="w-[90%] max-w-[64rem] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl lg:mb-2 font-bold">
              Prisma ORM
            </CardTitle>
            <CardDescription className="max-w-[90%] leading-5 text-base sm:leading-6">
              Prisma é um ORM de código aberto. Ele contém as seguintes
              ferramentas: Prisma Client (Construtor de consultas gerado
              automaticamente e com verificação de tipo para Node.js e
              TypeScript), Prisma Migrate (Sistema de migração) e Prisma Studio
              (GUI para visualizar e editar dados no banco de dados).
            </CardDescription>
          </CardHeader>

          <CardContent className="rounded-md leading-normal max-w-[80%]">
            Neste projeto, foi utilizado o Prisma para conectar um banco de
            dados <strong>PostgreSQL</strong>. O Prisma é um ORM (Object
            Relational Mapper) que permite a conexão com diversos bancos de
            dados, como PostgreSQL, MySQL, SQLite e Microsoft SQL Server. O
            Prisma permite a criação de modelos de dados e a geração de um
            cliente para acesso ao banco de dados. Para mais informações, acesse
            a documentação do{" "}
            <Link
              href="https://www.prisma.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Prisma
            </Link>
            .
          </CardContent>
        </Card>

        <Card className="w-[90%] max-w-[64rem] flex flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl lg:mb-2 font-bold">
              Sobre o Autor
            </CardTitle>
            <CardDescription className="max-w-[90%] leading-5 text-base sm:leading-6">
              Este projeto foi criado por{" "}
              <Link
                href={siteConfig.links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Flávio Alvarenga Rodrigues
              </Link>
              , um desenvolvedor web apaixonado por tecnologia e que adora
              aprender coisas novas. Trata-se de um projeto open source, então
              sinta-se livre para contribuir com o projeto.
            </CardDescription>
          </CardHeader>

          <CardContent className="rounded-md leading-normal max-w-[80%]">
            Desenvolvedor Web Full Stack com conhecimento em desenvolvimento de
            aplicações web utilizando tecnologias como React, Next.js, Node.js,
            NestJs TypeScript, GraphQL, PostgreSQL, MongoDB entre outras.
            Atualmente no penúltimo semestre do curso de Análise e
            Desenvolvimento de Sistemas.
            <BaseAccordion
              title="Entre em contato comigo"
              className="w-full mx-auto my-6"
            >
              <div className="flex flex-col space-y-1 my-4 text-left">
                <p className="ml-10 sm:ml-14 md:ml-24 lg:ml-40 xl:ml-60 2xl:ml-64">
                  <strong>LinkedIn:</strong>{" "}
                  <Link
                    href={siteConfig.links.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {siteConfig.links.linkedIn}
                  </Link>
                </p>
                <p className="ml-10 sm:ml-14 md:ml-24 lg:ml-40 xl:ml-60 2xl:ml-64">
                  <strong>GitHub:</strong>{" "}
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {siteConfig.links.github}
                  </Link>
                </p>
                <p className="ml-10 sm:ml-14 md:ml-24 lg:ml-40 xl:ml-60 2xl:ml-64">
                  <strong>E-Mail: </strong>
                  <Link
                    href={`${siteConfig.links.email}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {siteConfig.links.email.replace("mailto:", "")}
                  </Link>
                </p>
                <p className="ml-10 sm:ml-14 md:ml-24 lg:ml-40 xl:ml-60 2xl:ml-64">
                  <strong>Discord:</strong> username{" "}
                  <Link
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {siteConfig.links.discord}
                  </Link>
                </p>
              </div>
            </BaseAccordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutPage;
