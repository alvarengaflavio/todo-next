export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Todo App",
  description: "Lista de Tarefas simples com Next.js 14 e TypeScript",
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
  links: {
    twitter: "https://twitter.com/import_flavio",
    github: "https://github.com/alvarengaflavio",
    linkedIn: "https://www.linkedin.com/in/flavio-alvarenga",
    email: "mailto:flavio.alva@outlook.com",
    discord: "flavioalvarenga",
  },
};
