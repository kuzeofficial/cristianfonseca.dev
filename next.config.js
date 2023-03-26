/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
