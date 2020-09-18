import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    'in-dsm': { id: '5cf53658fbb8682a3246d907', versionFilePath: './versionFile.json' }
  }
};

export const LoggedIn = (args) => <Header {...args} />;
LoggedIn.args = {
  user: {}
};

export const LoggedOut = (args) => <Header {...args} />;
LoggedOut.args = {};
