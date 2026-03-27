/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/reaper-muay-thai",
  assetPrefix: "/reaper-muay-thai/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
