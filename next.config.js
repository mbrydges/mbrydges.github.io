/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/mbrydges": "",
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
}

module.exports = nextConfig
