import { configure, addDecorator } from '@storybook/react';

import { initDsm } from '@invisionapp/dsm-storybook';

function loadStories() {
  require('../src/stories');
}

//Init Dsm
initDsm({
  addDecorator,
  callback: () => configure(loadStories, module)
});
