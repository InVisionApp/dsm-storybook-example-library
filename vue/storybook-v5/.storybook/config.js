import { configure, addDecorator, addParameters } from '@storybook/vue';
import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    configure(loadStories, module);
  }
});
