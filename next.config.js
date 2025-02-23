/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/mbrydges": "",
    experimental: {
      appDir: true,
    },
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
}

module.exports = nextConfig
