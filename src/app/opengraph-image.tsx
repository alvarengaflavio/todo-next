import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello world!
      </div>
    ),
    size
  );
}
