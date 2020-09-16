import { withDsm } from '@invisionapp/dsm-storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { page: null }
};

export const decorators = [withDsm];
