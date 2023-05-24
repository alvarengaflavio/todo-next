import { Todo } from "@/types";

export default async function sitemap() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const allPosts = (await res.json()) as Todo[];

  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/dashboard/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/create", "/login", "/rendering", "/dashboard"].map(
    (route) => ({
      url: `http://localhost:3000${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}
