/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.clerk.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
          },
          {
            hostname: 'good-oyster-572.convex.cloud',
          },
          {
            protocol: "https",
            hostname: "*",
          },
          {
            protocol: "http",
            hostname: "*",
          },
        ]
      }
};

export default nextConfig;
