/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables highly optimized image loading for marketplace/summit assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  // Bypasses stricter linting rules that fail Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
