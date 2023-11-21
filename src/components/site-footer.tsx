import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-1 py-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            {currentYear}. Construído por{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Flávio Alvarenga
            </a>
            . Código fonte disponível no{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
