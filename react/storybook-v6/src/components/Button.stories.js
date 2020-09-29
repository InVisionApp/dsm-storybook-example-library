import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  parameters: {
    component: Button,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': { id: '5ef26f75b11374d346b6dcad', versionFilePath: '../components/versionFile.json' }
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
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
  }
};
