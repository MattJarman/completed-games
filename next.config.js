/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  compiler: {
    styledComponents: true
  },
  images: {
    loader: 'custom'
  }
}

module.exports = nextConfig
