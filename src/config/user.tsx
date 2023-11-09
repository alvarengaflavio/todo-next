"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;

  const sessionList = JSON.stringify(session, null, 2).split("\n");

  return (
    <>
      <pre className="mb-6">{JSON.stringify(status, null, 2)}</pre>
      <pre className="flex flex-col bg-slate-50 w-full">
        {sessionList.map((line, index) => (
          <code
            key={index}
            className="w-full flex text-md font-mono text-foreground p-0.5 ml-5"
          >
            {line}
          </code>
        ))}
      </pre>
    </>
  );
};
