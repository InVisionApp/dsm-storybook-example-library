import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  component: MyButton,
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

const iconOptions = { none: null, chevronRight: 'chevron-right' };

export const simpleButton = ({ text, icon, disabled }) => {
  return {
    components: { MyButton },
    props: {
      text: text,
      disabled: disabled,
      icon: icon
    },
    methods: { buttonClick: () => action('Button clicked')('Click') },
    template: '<my-button :onClick=buttonClick :icon=icon :disabled=disabled>{{text}}</my-button>'
  };
};

simpleButton.args = {
  disabled: false,
  icon: iconOptions.none,
  text: 'Button'
};

simpleButton.story = {
  // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
  // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
  // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' }
};
