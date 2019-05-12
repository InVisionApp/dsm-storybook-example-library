import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import MyButton from '../components/MyButton.vue';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => {
      const iconValues = ['none', 'chevron-right'];
      return {
        components: { MyButton },
        props: {
          textKnob: { default: text('text', 'TEXT') },
          disabledKnob: { default: boolean('disabled', false) },
          iconKnob: { default: select('icon', iconValues, 'none') }
        },
        template: '<my-button :icon=iconKnob :disabled=disabledKnob>{{textKnob}}</my-button>'
      };
    },
    {
      'in-dsm': { id: '5c4ec4489b3358003a8b612e', componentPath: '../components/MyButton.vue' }
    }
  );
