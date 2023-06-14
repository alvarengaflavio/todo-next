import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Página Inicial",
      href: "/",
    },
    {
      title: "Minhas Tarefas",
      href: "/todos",
    },
    {
      title: "Suporte",
      href: "/support",
      disabled: true,
    },
    {
      title: "Sobre",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "Todos",
      href: "/todos",
      icon: "post",
    },
    {
      title: "Account",
      href: "/account",
      icon: "user",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
    },
  ],
};
