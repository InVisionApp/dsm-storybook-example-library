import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import MediaCard from '../components/MediaCard';

storiesOf('MediaCard', module)
  .addDecorator(withKnobs)
  .add(
    'MediaCard',
    () => {
      return <MediaCard title="Good Vibrations" subTitle="Category" />;
    },
    {
      'in-dsm': { id: '5c4eb8659b3358003a8b60ff', version: '2.0.2' }
    }
  );
