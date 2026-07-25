/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "d22po4pjz3o32e.cloudfront.net" },
      { protocol: "https", hostname: "d1p38huyj6upaa.cloudfront.net" },
    ],
  },
  /** Retired materials / cities → focused vinyl + chain-link scope */
  async redirects() {
    return [
      { source: "/services/wood-fence", destination: "/services/vinyl-fence", permanent: true },
      { source: "/services/aluminum-fence", destination: "/services/vinyl-fence", permanent: true },
      { source: "/services/steel-fence", destination: "/services/chain-link-fence", permanent: true },
      { source: "/services/gates-access-control", destination: "/services/commercial-fence", permanent: true },
      { source: "/services/fence-installation", destination: "/#services", permanent: true },
      { source: "/services/fence-repair", destination: "/#services", permanent: true },
      { source: "/areas/tampa", destination: "/areas/orlando", permanent: true },
      { source: "/areas/lakeland", destination: "/areas/kissimmee", permanent: true },
    ];
  },
};
export default nextConfig;
