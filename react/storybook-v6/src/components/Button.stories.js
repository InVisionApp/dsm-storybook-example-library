import React from 'react';

import Button from './Button';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  component: Button,
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': { id: '6000ac8466b829002753fb04', versionFilePath: '../components/versionFile.json' }
  },
  argTypes: {
    onClick: { onClick: { action: 'clicked' } }
  }
};

const iconOptions = { none: null, chevronRight: 'chevronRight' };

export const simpleButton = ({ onClick, icon, disabled, children }) => (
  <Button onClick={onClick} icon={icon} disabled={disabled}>
    {children}
  </Button>
);

simpleButton.args = {
  disabled: false,
  icon: iconOptions.none,
  children: 'Button'
};

simpleButton.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
  }
};
