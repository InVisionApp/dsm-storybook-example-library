import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

/**
 * To override DSM-Storybook custom options\theme you can use Storybook options addon
 * link: https://github.com/storybooks/storybook/tree/release/4.x/addons/options
 * Example code below
 **/
// import { withOptions } from '@storybook/addon-options';
// import { themes } from '@storybook/components';
//
// addDecorator(withOptions({ name: 'custom name', theme: themes.dark }));

addDecorator(checkA11y);
addDecorator(centered);

//Init Dsm
initDsm({
  addDecorator,
  callback: () => configure(loadStories, module)
});
