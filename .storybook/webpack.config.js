const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  });

  config.module.rules.push({ test: /\.s[a/c]ss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
