import { withDsm } from '@invisionapp/dsm-storybook/withDsm';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [withDsm];
