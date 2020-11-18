import { configure, addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/html';
import { initDsm, withDsm } from '@invisionapp/dsm-storybook';

/**
 * To override @invisionapp/dsm-storybook custom options\theme you can use Storybook options parameter and theming
 * -- this will only override the specific parameters you change --
 * options: https://github.com/storybooks/storybook/blob/master/docs/src/pages/configurations/options-parameter/index.md
 * theming: https://github.com/storybooks/storybook/blob/master/docs/src/pages/configurations/theming/index.md
 * Example code below
 **/
// import { themes } from '@storybook/theming';
//
// function setCustomOptions() {
//   addParameters({
//     options: { theme: { ...themes.dark, brandTitle: 'Custom Title!' } }
//   });
// }

addParameters({
  backgrounds: [
    { name: 'DSM background', value: '#f8f8fa', default: true },
    { name: 'dark', value: '#333' }
  ]
});

addParameters({ docs: { page: null } });
addDecorator(withA11y);
addDecorator(centered);
addDecorator(withDsm);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    // apply the custom options
    // setCustomOptions();
    configure(require.context('../src/stories', true, /\.stories\.js$/), module);
  }
});
