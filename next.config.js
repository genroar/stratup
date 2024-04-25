<<<<<<< HEAD
=======
// next.config.js
module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Add PostCSS support
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: './postcss.config.js',
        },
      },
    };


    // Apply PostCSS loader only for client-side CSS
    if (!isServer) {
      if (Array.isArray(config.module.rules[2].oneOf)) {
        config.module.rules[2].oneOf.unshift({
          test: /\.css$/,
          use: ['style-loader', 'css-loader', postcssLoader],
        });
      }
    }

    return config;
  },
};
>>>>>>> 112fd9d58c1e51e9985fd8c5abc7c9bf929d1fb5
