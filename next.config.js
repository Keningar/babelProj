module.exports = {
  webpack(config, { defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-tag/loader', 'graphql-let/schema/loader'],
    });

    // config.plugins.push(
    //   new webpack.NormalModuleReplacementPlugin(/type-graphql$/, resource => {
    //     resource.request = resource.request.replace(
    //       /type-graphql/,
    //       'type-graphql/dist/browser-shim'
    //     );
    //   })
    // );

    return config;
  },
};
