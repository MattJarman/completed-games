/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  images: {
    loader: 'custom'
  }
}

module.exports = nextConfig
