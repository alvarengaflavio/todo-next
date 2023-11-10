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
    twitter: "https://twitter.com/banysan",
    github: "https://github.com/alvalenda",
    linkedIn: "https://www.linkedin.com/in/flavio-alvarenga",
  },
};
