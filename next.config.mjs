/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Build ke dauraan ESLint errors ignore karega
    },
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
