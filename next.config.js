/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-tororodroneservices.pantheonsite.io',
        port:'',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
