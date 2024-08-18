/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  images: {
    loader: "custom",
  },
  output: "export",
};

module.exports = nextConfig;
