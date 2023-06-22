import { Session } from "next-auth";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export interface ISession extends Session {
  user?: {
    id?: string | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export type Todo = {
  id?: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export type User = {
  id?: string;
  name: string;
  email: string;
  image?: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  todos?: Todo[];
};
