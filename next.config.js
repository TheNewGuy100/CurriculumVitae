
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/",
  redirects: async () => {
    return []
  },
  rewrites: async () => {
    return []
  },
  // serverRuntimeConfig: {
  //   // Will only be available on the server side
  //   mySecret: 'secret',
  //   secondSecret: process.env.SECOND_SECRET,
  // },
  // publicRuntimeConfig: {
  //   // Will be available on both server and client
  //   staticFolder: '/static',
  // }
}

module.exports = nextConfig
