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

export type SidebarNavItem = Omit<NavItem, "disabled"> & {
  icon: string;
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

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
  name: string | null;
  email: string;
  image?: string | null;
  username?: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
  todos?: Todo[];
};

export type AuthUser = {
  id?: string;
  name: string | null;
  email: string;
  image?: string | null;
  username?: string | null;
};
