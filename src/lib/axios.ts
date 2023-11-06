import axios from "axios";

const vercel_url2 = process.env.NEXT_PUBLIC_VERCEL_URL;

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/api` ||
    `https://${process.env.NEXT_PUBLIC_BRANCH_URL}/api`,

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
