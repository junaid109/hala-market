/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
    formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/png', 'image/svg+xml'],
  }
}

module.exports = nextConfig
