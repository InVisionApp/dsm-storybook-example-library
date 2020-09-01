import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withDsm } from '@invisionapp/dsm-storybook';

addParameters({ docs: { page: null } });
addDecorator(withA11y);
addDecorator(centered);
addDecorator(withDsm);
