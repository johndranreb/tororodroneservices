/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tororo-drone-service.local',
        port:'',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
