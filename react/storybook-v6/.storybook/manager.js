import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { getDefaultDsmOptions, getDefaultDsmTheme } from '@invisionapp/dsm-storybook';

addons.setConfig({
  ...getDefaultDsmOptions(process.env.STORYBOOK_DSM),
  theme: {
    ...getDefaultDsmTheme(process.env.STORYBOOK_DSM)
  }
});
