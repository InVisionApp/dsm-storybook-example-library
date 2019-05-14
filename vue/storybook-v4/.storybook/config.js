import { configure, addDecorator } from '@storybook/vue';
import { checkA11y } from '@storybook/addon-a11y';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

addDecorator(checkA11y);

//Init Dsm
initDsm({
  addDecorator,
  callback: () => {
    configure(loadStories, module);
  }
});
