/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/getById",
            destination: "https://e-commerce-admin-eight-mocha.vercel.app/api/getById",
          },
        ];
      },
}

module.exports = nextConfig
