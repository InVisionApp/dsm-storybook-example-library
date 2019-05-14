import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, withKnobs } from '@storybook/addon-knobs';

import Nav from '../components/Nav';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'Nav',
    () => {
      const tabs = [{ id: '1', title: 'one' }, { id: '2', title: 'two' }, { id: '3', title: 'three' }];

      return <Nav tabs={object('tabs', tabs)} initialActiveTab="1" />;
    },
    {
      'in-dsm': { id: '5c4eb8659b3358003a8b60ff', version: '1.0.0' }
    }
  );
