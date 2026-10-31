/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? '.next_prod' : '.next',
  output: 'export',
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  optimizeFonts: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp|avif|gif|ico|bmp|svg|mp4|webm|ogg|mov)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash:8][ext]' },
    });
    return config;
  },
};

export default nextConfig;
