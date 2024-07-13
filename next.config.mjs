/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
      
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
          },
          {
            hostname: 'good-oyster-572.convex.cloud',
          },
        ]
      }
};

export default nextConfig;
