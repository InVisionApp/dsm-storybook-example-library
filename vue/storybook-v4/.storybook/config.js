import { configure, addDecorator } from '@storybook/vue';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

//Init Dsm
initDsm({
  addDecorator,
  callback: () => {
    configure(loadStories, module);
  }
});
