import { ISession } from "@/types";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const _session = session as ISession;

  return _session?.user;
}
