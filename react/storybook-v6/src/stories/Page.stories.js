import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.story';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    'in-dsm': { id: '5cf53658fbb8682a3246d907', versionFilePath: './versionFile.json' }
  }
};

export const LoggedIn = (args) => <Page {...args} />;
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = (args) => <Page {...args} />;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
