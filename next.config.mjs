/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vatech-html-demo.vercel.app',
          },
        ],
      },
};

export default nextConfig;
