// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configurations
  // ...

  // Add this for the warning
  allowedDevOrigins: ['http://192.168.1.107:3000'],
  // If you access it via localhost:
  // allowedDevOrigins: ['http://localhost:3000', 'http://192.168.1.107:3000'],
};

module.exports = nextConfig;