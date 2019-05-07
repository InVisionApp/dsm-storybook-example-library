import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import Button from '../components/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => {
      const sizeOptions = {
        regular: 'regular',
        smaller: 'smaller'
      };

      return (
        <Button size={select('size', sizeOptions, sizeOptions.regular)} disabled={boolean('disabled', false)}>
          {text('children', 'TEXT')}
        </Button>
      );
    },
    {
      'in-dsm': { id: '333' }
    }
  );
