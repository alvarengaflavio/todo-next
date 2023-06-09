import { FC } from "react";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { dashboardConfig } from "@/config/dashboard";
import { UserNav } from "./nav-user";

interface PageProps {}

export const SiteHeader: FC<PageProps> = ({}) => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background flex justify-around content-center">
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={dashboardConfig.mainNav} />
        <div className="flex space-x-4 items-center align-middle">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
};
