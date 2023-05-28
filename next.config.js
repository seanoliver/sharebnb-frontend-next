/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: 'placehold.co'
    },
    {
      protocol: process.env.NEXT_PUBLIC_S3_PROTOCOL,
      hostname: process.env.NEXT_PUBLIC_S3_HOSTNAME,
      port: '',
      pathname: `/${process.env.NEXT_PUBLIC_S3_BUCKET}/**`
    }]
  }
}

module.exports = nextConfig
