import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: '5c86295038392c00aafece83',
      componentPath: '../components/MyButton.vue',
      versionFilePath: '../components/versionFile.json'
    }
  }
};

const iconValues = ['none', 'chevron-right'];

export const simpleButton = () => {
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
};
