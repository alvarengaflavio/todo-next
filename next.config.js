/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  reactStrictMode: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self', img-src *, content-src vitals.vercel-insights.com, script-src 'self' 'unsafe-inline' 'unsafe-eval' vitals.vercel-insights.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
