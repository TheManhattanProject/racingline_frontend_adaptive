/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "/components/loader/image_loader.js",
  },
};

module.exports = nextConfig;
