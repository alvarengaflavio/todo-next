"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useState } from "react";
import PricingSkeleton from "@/components/skeletons/pricing-skeleton";
import { redirect } from "next/navigation";

interface GetUserPlanProps {}

type Plan = {
  id: string;
  name: "basic" | "premium";
  price: number;
  features: string[];
};

const GetUserPlan: FC<GetUserPlanProps> = ({}) => {
  const { data: session, status } = useSession();
  const [plan, setPlan] = useState<Plan | null>(null);
  const addSelectedOutline = " outline outline-8 outline-foreground ";
  const value = 9.9;
  const formattedValue = value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace(/\s/g, "");

  if (status === "loading") {
    return <PricingSkeleton />;
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  if (status === "authenticated") {
    const { user } = session;
    // * const { plan } = user;
    // * setPlan(user.plan);
  }

  const planName = plan?.name || "basic";
  return (
    <>
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Precificação simples e transparente
        </h2>
        <p className="max-w-[85%] ml-1 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Receba acesso instantâneo a todos os recursos do TodoApp com o plano
          de assinatura PRO.
        </p>
      </div>
      <div
        className={cn(
          "grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]",
          planName === "premium" ? addSelectedOutline : " "
        )}
      >
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Benefícios inclusos no plano PRO
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Tarefas ilimitadas
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Avatares exclusivos
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Acesso ao Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Prioridade de Acesso
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Suporte Premium
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Acesso a API
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-center md:ml-[-15px]">
          <div>
            <h4 className="text-7xl font-bold">{formattedValue}</h4>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              plano mensal
            </p>
          </div>
          <Link
            href="/login"
            className={cn(
              buttonVariants(
                planName === "premium"
                  ? { size: "lg", variant: "secondary" }
                  : { size: "lg" }
              ),
              planName === "premium" ? " pointer-events-none" : " "
            )}
          >
            {planName === "premium" ? "Plano Atual" : "Assine Já"}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Todo App é um app demonstrativo.{"  "}
          <strong>Testar a assinatura não resultará em cobrança.</strong>
        </p>
      </div>

      <div
        className={cn(
          "grid w-full mt-10 items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]",
          planName === "basic" ? addSelectedOutline : " "
        )}
      >
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            Plano Gratuito{" "}
            <span className="text-sm font-medium text-muted-foreground mt-1">
              por tempo limitado
            </span>
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.close className="mr-2 h-4 w-4" /> Tarefas ilimitadas
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Avatares exclusivos
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Acesso ao Discord
            </li>
            <li className="flex items-center">
              <Icons.close className="mr-2 h-4 w-4" /> Prioridade de Acesso
            </li>
            <li className="flex items-center">
              <Icons.close className="mr-2 h-4 w-4" /> Suporte Premium
            </li>
            <li className="flex items-center">
              <Icons.close className="mr-2 h-4 w-4" /> Acesso a API
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-center md:ml-[-15px]">
          <div>
            <h4 className="text-7xl font-bold">Grátis</h4>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              por tempo limitado
            </p>
          </div>
          <Link
            href="/login"
            className={cn(
              buttonVariants(
                planName === "basic"
                  ? { size: "lg", variant: "secondary" }
                  : { size: "lg" }
              ),
              planName === "basic" ? " pointer-events-none" : " "
            )}
          >
            {planName === "basic" ? "Plano Atual" : "Assine Já"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetUserPlan;
