/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-tororodroneservices.pantheonsite.io/sample-post/',
        port:'8080',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
