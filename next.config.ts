/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // This configuration allows Next.js to optimize images from Sanity's CDN.
    // It's a required security measure for using external image sources.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
