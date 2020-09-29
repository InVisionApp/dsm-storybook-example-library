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
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      options: {
        removeTags: true,
        removingTags: ['title', 'desc'],
        removeSVGTagAttrs: false,
        removingTagAttrs: ['fill']
      }
    });

    // Return the altered config
    return config;
  }
};
