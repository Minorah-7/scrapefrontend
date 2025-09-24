/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"], // 👈 allow this domain
  },
  async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://scrapebackend:3001/api/:path*",
    },
  ];
}

};

module.exports = nextConfig;
