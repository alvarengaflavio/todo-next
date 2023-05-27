export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Todo App",
  description: "Lista de Tarefas simples com Next.js 13 e TypeScript",
  mainNav: [
    {
      title: "Página Inicial",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/banysan",
    github: "https://github.com/alvalenda",
  },
};
