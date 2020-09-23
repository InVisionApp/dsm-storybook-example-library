import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import Toast from './Toast';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .add(
    'Toast',
    () => {
      const statusOptions = {
        default: 'default',
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      };

      return (
        <Toast
          text={text('text', 'This is a notification message')}
          status={select('status', statusOptions, statusOptions.default)}
        />
      );
    },
    {
      'in-dsm': { id: '5c4eb8659b3358003a8b60ff', version: '1.0.0' }
    }
  );
