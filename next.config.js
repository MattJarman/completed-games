/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.steamgriddb.com']
  },
  compiler: {
    styledComponents: true
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
