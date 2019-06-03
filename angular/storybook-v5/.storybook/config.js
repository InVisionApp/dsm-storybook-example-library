import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(withA11y);
addDecorator(centered);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    configure(loadStories, module);
  }
});
