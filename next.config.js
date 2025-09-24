/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"], // 👈 allow this domain
  },
  async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
    },
  ];
}

};

module.exports = nextConfig;
