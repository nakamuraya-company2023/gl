/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.glsl$/,
        use: 'raw-loader',
      })
      return config
    },
  }

export default nextConfig;
