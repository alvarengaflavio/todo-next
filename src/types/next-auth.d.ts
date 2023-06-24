import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
    };

    expires?: ISODateString;
  }

  interface User {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string | null;
  }
}
