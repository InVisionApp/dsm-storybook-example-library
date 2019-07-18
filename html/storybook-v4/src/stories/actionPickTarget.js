import { decorate } from '@storybook/addon-actions';

const pickTarget = decorate([(args) => [args[0].target]]);

export { pickTarget };
