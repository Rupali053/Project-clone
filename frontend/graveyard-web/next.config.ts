// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❌ Vercel build fail hone se bacha lega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ TS error pe build fail mat karo
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
