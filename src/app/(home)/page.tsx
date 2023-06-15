import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface HomePageProps {}

function Home({}: FC<HomePageProps>) {
  return (
    <div className="bg-background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-popover-foreground ring-1 ring-ring hover:ring-slate-600 transition-colors">
              Este projeto faz parte do portfólio de{" "}
              <Link
                href={siteConfig.links.github}
                className="font-semibold text-indigo-600"
                target="_blank"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Flávio Alvarenga <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Mantenha suas Tarefas Organizadas{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-popover-foreground">
              Com o <span className="font-semibold text-primary">Todo App</span>{" "}
              você pode criar e gerenciar suas tarefas de forma prática e fácil,
              mantendo o foco onde realmente importa. Basta criar uma conta e
              começar a usar.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/todos"
                className={cn(buttonVariants({ variant: "default" }), "w-36")}
              >
                Começar Agora
              </Link>
              <Link
                href={siteConfig.mainNav[3].href}
                className={cn(buttonVariants({ variant: "outline" }), "w-36")}
              >
                Saiba Mais{" "}
                <span aria-hidden="true" className="ml-1">
                  {" "}
                  &rarr;{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
