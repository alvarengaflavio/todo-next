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
    "/pricing",
  ].map((route) => ({
    url: `https://todo-next-alvalenda.vercel.app${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
