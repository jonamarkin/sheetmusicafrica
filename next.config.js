/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.com",
        pathname: "/**", // Match all paths
      },
    ],
  },
};

module.exports = nextConfig;
