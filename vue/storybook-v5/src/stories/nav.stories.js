import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import MyNav from '../components/MyNav.vue';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'Nav',
    () => {
      const tabs = [{ id: '1', title: 'one' }, { id: '2', title: 'two' }, { id: '3', title: 'three' }];

      // The wrapper to show the component is should be as a function decorator, but right now there is a bug in Storybook for Vue
      // with function decorators and knobs.
      return {
        components: { MyNav },
        props: { tabsKnob: { default: object('tabs', tabs) } },
        template:
          '<div :style="{ display: displayStyle, backgroundColor: background, padding: customPadding }"><my-nav :tabs=tabsKnob initialActiveTab="1" ></my-nav></div>',
        data: () => ({
          displayStyle: 'inline-block',
          background: 'white',
          customPadding: '25px'
        })
      };
    },
    {
      'in-dsm': { id: '5c4ec4489b3358003a8b612e', componentPath: '../components/MyNav.vue' }
    }
  );
