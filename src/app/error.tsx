"use client";
import Link from "next/link";
import { FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 bg-slate-200 dark:bg-gray-900 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-emerald-700 dark:text-emerald-500">
          There was an error
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-50  sm:text-3xl lg:text-6xl">
          {error.message || "Something went wrong"}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Please try again later or contact support if the problem persists.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="px-4 py-2 bg-sky-600 text-slate-200 dark:text-slate-900 dark:bg-sky-400 rounded-md font-bold"
            onClick={reset}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-transparent text-sky-600 outline outline-2 outline-sky-600 dark:outline-sky-400 dark:text-sky-400 px-3 py-1 rounded-md text-xl"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
