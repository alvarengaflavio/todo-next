import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/av-big.png",
    shortcut: "/av-big.png",
    apple: "/av-big.png",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={inter.className + "min-h-screen bg-background antialiased"}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
          {/* ThemeSwitch só funcionava abaixo do children, agora funciona acima */}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
