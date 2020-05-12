// main.js
module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@invisionapp/dsm-storybook/register'
  ]
};
