import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mySearchParam = searchParams.get("search");

  console.log(searchParams);
  console.log("Search Param:", mySearchParam);

  return new Response(JSON.stringify({ message: "Hello World" }), {
    status: 200,
    statusText: "OK",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  return new Response("OK");
}
