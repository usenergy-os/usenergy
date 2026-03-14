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
  }
};

export default nextConfig;
