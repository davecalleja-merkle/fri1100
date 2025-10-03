/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Enable TypeScript path mapping support
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': _path.resolve(__dirname, './'),
    };
    return config;
  },
}

module.exports = nextConfig