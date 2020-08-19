import { addons } from '@storybook/addons';
import { getDefaultDsmOptions, getDefaultDsmTheme } from '@invisionapp/dsm-storybook';

addons.setConfig({
  ...getDefaultDsmOptions(process.env.STORYBOOK_DSM),
  theme: {
    ...getDefaultDsmTheme(process.env.STORYBOOK_DSM)
  }
});
