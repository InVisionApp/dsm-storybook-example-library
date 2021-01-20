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
