export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/todos", "/todo/:path*", "/pricing", "/account", "/preferences"],
};
