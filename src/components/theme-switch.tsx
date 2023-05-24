"use client";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

interface PageProps {}

const themes = [{ name: "Light" }, { name: "Dark" }, { name: "System" }];

const ThemeSwitch: FC<PageProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(() => true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitch;
