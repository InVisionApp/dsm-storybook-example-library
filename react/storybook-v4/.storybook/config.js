import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { withBackgrounds } from '@storybook/addon-backgrounds';
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
// addDecorator(withOptions({ name: 'Custom Title!', theme: themes.dark }));

addDecorator(withBackgrounds([{ name: 'DSM background', value: '#f8f8fa', default: true }, { name: 'dark', value: '#333' }]));
addDecorator(checkA11y);
addDecorator(centered);

//Init Dsm
initDsm({
  addDecorator,
  callback: () => configure(loadStories, module)
});
