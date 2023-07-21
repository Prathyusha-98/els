const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  },
}

module.exports = {
  images: {
    domains: ['endlessstories.s3.ap-south-1.amazonaws.com'], // Add the domain(s) from which the images will be served.
  },
};

