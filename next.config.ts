import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Change this to your repository name
  basePath: isProd ? "/Watches-UpFront" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
