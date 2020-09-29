module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@invisionapp/dsm-storybook'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader']
    });

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'vue-svg-loader',
      options: {
        svgo: {
          plugins: [
            { removeDoctype: true },
            { removeComments: true },
            { cleanupIDs: false },
            { collapseGroups: false },
            { removeEmptyContainers: false }
          ]
        }
      }
    });

    // Return the altered config
    return config;
  }
};
