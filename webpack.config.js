module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      node: {
        fs: "empty",
      },
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: pluginOptions.options,
        },
      ],
    });
    return config;
  },
};
