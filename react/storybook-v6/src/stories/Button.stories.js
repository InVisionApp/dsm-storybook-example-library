import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    'in-dsm': { id: '5ef26f75b11374d346b6dcad', versionFilePath: './versionFile.json' }
  }
};

// const Template = (args) => <Button {...args} />;

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  label: 'Button'
};

export const Large = (args) => <Button {...args} />;
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  size: 'small',
  label: 'Button'
};
