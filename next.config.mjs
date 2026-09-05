/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.38"],
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
};

export default nextConfig;
