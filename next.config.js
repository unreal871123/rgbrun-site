/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true,  // 禁用图片优化功能
  },
  webpack(config) {
    // 在 webpack 配置中禁用 _next 路径
    config.output.publicPath = '/rgbrun-site/_next/'; // 设置正确的静态路径
    return config;
  }
};

module.exports = nextConfig;
