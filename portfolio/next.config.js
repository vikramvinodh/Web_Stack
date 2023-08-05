module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*).(js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
