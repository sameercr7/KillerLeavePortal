/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,   // Disables fs (File System)
          net: false,  // Disables net (Networking)
          tls: false,  // Disables tls (Security)
        };
      }
      return config;
    },
  }
  
  module.exports = nextConfig
  

//   /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig