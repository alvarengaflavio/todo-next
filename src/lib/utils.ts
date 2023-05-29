import type { Todo } from "@/types";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateToLocale(date: number | string | Date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    dayPeriod: "short",
  });
}

export function sortTodoList(todos: Todo[]) {
  return todos.sort((a, b) => {
    if (a.done === b.done) {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
    return a.done ? 1 : -1;
  });
}
