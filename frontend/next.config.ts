
module.exports = {
  images: {
    domains: ['localhost'], // Because your backend is running on localhost
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',  // Your backend port
        pathname: '/uploads/**',
      },
    ],
  }
}