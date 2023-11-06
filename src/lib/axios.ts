import axios from "axios";

const vercel_url = process.env.VERCEL_URL;
const api_url = window.location.href;

console.log("vercel_url", vercel_url);
console.log("api_url", api_url);

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    // `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
    (vercel_url as string),

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
