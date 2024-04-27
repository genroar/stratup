<<<<<<< HEAD


=======
// next.config.js
>>>>>>> 4bb7a5e26ca1071fb11eb5bcb0551981a65283f4
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
<<<<<<< HEAD

=======
>>>>>>> 4bb7a5e26ca1071fb11eb5bcb0551981a65283f4
