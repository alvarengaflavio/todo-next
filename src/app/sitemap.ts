import { Todo } from "@/types";

export default async function sitemap() {
  const routes = [
    "",
    "/register",
    "/login",
    "/todo/[todoId]",
    "/todos",
    "/about",
    "/account",
    "/preferences",
  ].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
