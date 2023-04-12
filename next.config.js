/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
        port: '',
        // pathname: 'images/posters/kp_small/**',
      },
    ],
  },
}

module.exports = nextConfig
