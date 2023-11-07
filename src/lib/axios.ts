import axios from "axios";

let url = "";

if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
  url = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/api`;
} else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
  url = "https://todo-next-alvalenda.vercel.app/api";
} else {
  url = `${process.env.NEXT_PUBLIC_API_URL}` || "http://localhost:3000/api";
}

const api = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Origin: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  },
});

export default api;
