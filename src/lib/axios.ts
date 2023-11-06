import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/api` ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
