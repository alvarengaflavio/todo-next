import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ authenticated: !!session?.user });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  return new Response("OK");
}
