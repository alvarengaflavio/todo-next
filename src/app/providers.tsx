"use client";

import { TodoContextProvider } from "@/context/todo-context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TodoContextProvider>
        <SessionProvider>{children}</SessionProvider>
      </TodoContextProvider>
    </NextThemesProvider>
  );
}
