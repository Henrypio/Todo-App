const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Or appDir: false, depending on your setup
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"], // Ensure the extensions you use are included
};

module.exports = nextConfig;
