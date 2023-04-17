/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // hostname: 'https://i.annihil.us',
        port: '',
        // pathname: 'images/posters/kp_small/**',
      },
    ],
  },
}

module.exports = nextConfig
