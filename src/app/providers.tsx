"use client";

import { CounterContextProvider } from "@/context/counter.context";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <CounterContextProvider>{children}</CounterContextProvider>
    </NextThemesProvider>
  );
}
