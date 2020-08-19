import { addons } from '@storybook/addons';
import { getDefaultDsmOptions, getDefaultDsmTheme } from '@invisionapp/dsm-storybook';

/**
 * To override @invisionapp/dsm-storybook custom options/theme you can use Storybook options parameter and theming
 * -- this will only override the specific parameters you change --
 * options: https://storybook.js.org/docs/react/configure/features-and-behavior
 * theming: https://storybook.js.org/docs/react/configure/theming
 * Example code below
 **/
//  addons.setConfig({
//    ...getDefaultDsmOptions(process.env.STORYBOOK_DSM),
//    showNav: true,
//    theme: {
//      ...getDefaultDsmTheme(process.env.STORYBOOK_DSM),
//      fontBase: "'Open Sans'",
//      colorPrimary: "#123456"
//    }
//  });

addons.setConfig({
  ...getDefaultDsmOptions(process.env.STORYBOOK_DSM),
  theme: {
    ...getDefaultDsmTheme(process.env.STORYBOOK_DSM)
  }
});
