/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  env: {
    GRAPHQL_URI: process.env.GRAPHQL_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};
