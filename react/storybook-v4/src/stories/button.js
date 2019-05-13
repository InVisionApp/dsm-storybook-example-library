import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import Button from '../components/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => {
      const iconOptions = { none: null, 'chevron-right': 'chevron-right' };

      return (
        <Button icon={select('icon', iconOptions, iconOptions.none)} disabled={boolean('disabled', false)}>
          {text('children', 'TEXT')}
        </Button>
      );
    },
    {
      'in-dsm': { id: '5c4eb8659b3358003a8b60ff', version: '1.0.0' }
    }
  );
