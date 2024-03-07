/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/getById",
            destination: "https://e-commerce-admin-eight-mocha.vercel.app/api/getById",
          },
          {
            source: "/api/checkout",
            destination: "https://e-commerce-admin-eight-mocha.vercel.app/api/checkout",
          },
          {
            source: "/api/products",
            destination: "https://e-commerce-admin-eight-mocha.vercel.app/api/products",
          },
        ];
      },
}

module.exports = nextConfig
