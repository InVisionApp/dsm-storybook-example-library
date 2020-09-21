import { addons } from '@storybook/addons';
import { getDsmOptions, getDsmTheme } from '@invisionapp/dsm-storybook';

/**
 * To override @invisionapp/dsm-storybook custom options/theme you can use Storybook options parameter and theming
 * -- this will only override the specific parameters you change --
 * options: https://storybook.js.org/docs/react/configure/features-and-behavior
 * theming: https://storybook.js.org/docs/react/configure/theming
 * Example code below
 **/
//  addons.setConfig({
//   ...getDsmOptions(process.env.STORYBOOK_DSM),
//   showNav: true,
//   theme: {
//     ...getDsmTheme(process.env.STORYBOOK_DSM),
//     colorPrimary: '#123456'
//   }
//  });

addons.setConfig({
  ...getDsmOptions(process.env.STORYBOOK_DSM)
  // Using the DSM theme is optional
  // theme: {
  //   ...getDsmTheme(process.env.STORYBOOK_DSM)
  // }
});
