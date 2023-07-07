import { prisma } from "@/lib/db/db";
import { compare } from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/todos",
  },
  providers: [
    CredentialsProvider({
      name: "Entrar",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "seu@email.com",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user?.email) return null;

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token.id) {
        if (session.user) {
          session.user.id = token.id as string;
          session.user.name = token.name as string;
          session.user.username = token.username as string;
          session.user.image = token.picture as string;
        }
      }

      return session;
    },

    jwt: async ({ token, trigger, user, session }) => {
      if (user) {
        token.id = user.id; // neste caso id e sub são iguais
        token.username = user.username;
      }

      if (trigger === "update") {
        token = { ...token, ...session };
      }

      return token;
    },
  },
};
