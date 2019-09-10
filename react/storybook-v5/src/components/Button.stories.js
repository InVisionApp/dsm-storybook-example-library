import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import buttonDocs from './Button.mdx';

import Button from './Button';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': { id: '5cf53658fbb8682a3246d907', versionFilePath: '../components/versionFile.json' }
  }
};

const iconOptions = { none: null, 'chevron-right': 'chevron-right' };

export const simpleButton = () => (
  <Button
    onClick={() => action('Button clicked')('Click')}
    icon={select('icon', iconOptions, iconOptions.none)}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'TEXT')}
  </Button>
);

simpleButton.story = {
  parameters: {
    docs: { page: buttonDocs }
  }
};
