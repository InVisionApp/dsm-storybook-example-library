import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

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
  backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }, { name: 'white', value: '#333' }]
});

addDecorator(withA11y);
addDecorator(centered);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    // apply the custom options
    // setCustomOptions();
    configure(loadStories, module);
  }
});
