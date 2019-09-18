import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

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
        methods: { buttonClick: () => action('Button clicked')('Click') },
        template: '<my-button :onClick=buttonClick :icon=iconKnob :disabled=disabledKnob>{{textKnob}}</my-button>'
      };
    },
    {
      'in-dsm': {
        id: '5cf5371e4ffc3ff59fd5ee1a',
        componentPath: '../components/MyButton.vue',
        versionFilePath: '../components/versionFile.json'
      }
    }
  );
