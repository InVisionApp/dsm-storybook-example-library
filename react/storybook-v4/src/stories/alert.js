import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import Alert from '../components/Alert';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add(
    'Alert',
    () => {
      const options = {
        default: 'default',
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      };

      return <Alert value={text('value', 'Winter is coming...')} status={select('status', options, 'default')} />;
    },
    {
      'in-dsm': { id: '5c4eb8659b3358003a8b60ff', version: '2.0.2' }
    }
  );
