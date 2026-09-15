import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/sync_qalam",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:8000/sync_qalam"
            : "/api/index.py",
      },
      {
        source: "/sync_lms",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:8000/sync_lms"
            : "/api/index.py",
      },
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:8000/:path*"
            : "/api/index.py",
      },
    ];
  },
};

export default nextConfig;
