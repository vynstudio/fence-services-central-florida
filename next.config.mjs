/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d22po4pjz3o32e.cloudfront.net" },
      { protocol: "https", hostname: "d1p38huyj6upaa.cloudfront.net" },
    ],
  },
};
export default nextConfig;
