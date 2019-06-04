import { configure, addDecorator } from '@storybook/angular';
import { checkA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

/**
 * To override @invisionapp/dsm-storybook custom options\theme you can use Storybook options addon
 * -- this will override all of @invisionapp/dsm-storybook options\themes --
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
  callback: () => {
    configure(loadStories, module);
  }
});
