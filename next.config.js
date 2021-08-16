module.exports = (parse) => ({
  env: {
    HASURA_BASE_URL: process.env.HASURA_BASE_URL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  trailingSlash: true,
});
