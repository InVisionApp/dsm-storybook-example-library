import { withDsmHtml } from '@invisionapp/dsm-storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [withDsmHtml];
