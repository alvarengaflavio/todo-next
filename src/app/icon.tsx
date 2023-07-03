import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex items-center justify-center text-md text-white bg-black font-bold rounded-md"
        // className="flex items-center text-md text-white bg-black font-bold rounded-md"
      >
        Ta
      </div>
    ),
    {
      ...size,
    }
  );
}
