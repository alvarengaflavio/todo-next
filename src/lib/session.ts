"use client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const _session = session as Session;

  return _session?.user;
}
