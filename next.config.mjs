/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  // Uncomment to fix
  // swcMinify: false,
};

export default nextConfig;
