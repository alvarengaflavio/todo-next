import axios from "axios";
import { headers } from "next/headers";

const host = headers().get("host");

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    //`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
    `http://${host}/api`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
