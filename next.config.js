/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"], // 👈 allow this domain
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://scrapebackend-production.up.railway.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
