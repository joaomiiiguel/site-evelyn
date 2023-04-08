/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
})
module.exports = withBundleAnalyzer({})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
