import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import MyNav from '../components/MyNav.vue';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'Nav',
    () => {
      const tabs = [{ id: '1', title: 'one' }, { id: '2', title: 'two' }, { id: '3', title: 'three' }];

      return {
        components: { MyNav },
        props: { tabsKnob: { default: object('tabs', tabs) }, initialActiveTabKnob: { default: text('initialActiveTab', '1') } },
        template: '<my-nav :tabs=tabsKnob :initialActiveTab=initialActiveTabKnob ></my-nav>'
      };
    },
    {
      'in-dsm': { id: '5cd924635fbc241ca04d2ea4', componentPath: '../components/MyNav.vue' }
    }
  );
