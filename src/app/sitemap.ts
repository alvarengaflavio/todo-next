import { Todo } from "@/types";

export default async function sitemap() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const allTodos = (await res.json()) as Todo[];

  const todos = allTodos.map((todo) => ({
    url: `http://localhost:3000/todo/${todo.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    "",
    "/register",
    "/login",
    "/todos",
    "/about",
    "/account",
    "/preferences",
  ].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...todos];
}
