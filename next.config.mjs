/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "https://wa.me/918260783152",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
