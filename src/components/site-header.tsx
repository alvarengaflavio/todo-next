import { FC } from "react";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { dashboardConfig } from "@/config/dashboard";

interface PageProps {}

export const SiteHeader: FC<PageProps> = ({}) => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background flex justify-around content-center">
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={dashboardConfig.mainNav} />
        <ModeToggle />
      </div>
    </header>
  );
};
