"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  // ? segment com bug // testando com usePathname
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const navTest = () =>
    items?.map((item) => {
      console.log("pathname", item.href, pathname, item.href === pathname);
    });

  navTest();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                " relative flex items-center text-lg font-medium transition-all hover:text-foreground/80 sm:text-sm",
                item.href === pathname
                  ? "text-foreground "
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
              <div
                className={cn(
                  item.href === pathname ? "before:w-4/5" : "before:w-0",
                  "absolute before:content-[''] w-full h-full p-0 m-0  hover:before:w-full before:transition-all before:duration-300 before:absolute before:inset-x-0 before:h-[1px] before:bg-foreground before:rounded-full before:bottom-[-0.01rem]",
                  item.disabled && "hover:before:w-0"
                )}
              />
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
