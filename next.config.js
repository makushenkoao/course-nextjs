/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        issue: /\.[jt]sx?$/,
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProps: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

