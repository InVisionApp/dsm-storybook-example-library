import React from 'react';

import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  parameters: {
    'in-dsm': { id: '6000ac8466b829002753fb04', version: '1.0.0' }
  }
};

const statusOptions = {
  default: 'default',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info'
};

export const ToastComponent = ({ text, status }) => {
  return <Toast text={text} status={status} />;
};

ToastComponent.args = {
  text: 'This is a notification message',
  status: statusOptions.default
};

ToastComponent.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
  }
};
