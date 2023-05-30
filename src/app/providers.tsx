"use client";

import { CounterContextProvider } from "@/context/counter.context";
import { TodoContextProvider } from "@/context/todo-context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TodoContextProvider>{children}</TodoContextProvider>
    </NextThemesProvider>
  );
}
