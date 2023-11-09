"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;

  const sessionList = JSON.stringify(session, null, 3).split("\n");
  if (sessionList.length === 1) {
    sessionList[0] = " Usuário não autenticado. ";
  }

  return (
    <>
      <pre className="mb-4 font-bold">{JSON.stringify(status, null, 2)}</pre>
      <pre className="flex flex-col bg-slate-100 dark:bg-slate-800 rounded-sm">
        {sessionList.map((line, index) => (
          <code
            key={index}
            className="w-full flex text-md font-mono text-foreground p-0.5 ml-5 "
          >
            {line}
          </code>
        ))}
      </pre>
    </>
  );
};
