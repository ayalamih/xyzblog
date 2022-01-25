const withFonts = require('next-fonts');

module.exports = withFonts({
  images: {
    domains: ['yux.ayalamih.net'],
  },
  swcMinify: true,
  enableSvg: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|otf|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  }
});