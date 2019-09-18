import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: '5c86295038392c00aafece83',
      componentPath: './MyButton.vue',
      versionFilePath: './versionFile.json'
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

simpleButton.story = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' }
};
