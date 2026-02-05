module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/google00e2a4034c56b95a.html',
        destination: '/google00e2a4034c56b95a.html', // Ensure the file is served directly
      },
    ];
  },
}
