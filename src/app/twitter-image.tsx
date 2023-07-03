import { ImageResponse } from "next/server";
import { size } from "./opengraph-image";

export const runtime = "edge";
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full text-black text-9xl text-center background-white rounded-md flex justify-center items-center"
        className="w-full top-1/2 transform -translate-y-1/2"
      >
        TODO APP
        <div tw="absolute top-[63%] left-3/4 flex text-xl">
          by <div tw="text-blue-600"> Alvarenga</div>
        </div>
      </div>
    ),
    size
  );
}
