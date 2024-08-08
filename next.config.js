/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js"],
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    // Enable the src directory as the pages directory
    config.resolve.modules.push(__dirname + "/src");

    return config;
  },
};

module.exports = nextConfig;
