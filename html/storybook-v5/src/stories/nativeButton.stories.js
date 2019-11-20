import { decorate } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import buttonDocs from '../components/button/button.mdx';
import { nativeButton } from '../components/nativeButton/nativeButton';

customElements.define('dsm-button', nativeButton);
const decoratedAction = decorate([() => ['Click']]);

export default {
  title: 'Native Component Button',
  parameters: {
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': { id: '5cf926dec0f0050ea6ca4a8a' }
  }
};

const availableIcons = {
  none: '',
  'chevron-right': 'chevron-right'
};

export const simpleButton = () => {
  const icon = select('icon', availableIcons, availableIcons.none);
  const disabled = boolean('disabled', false);
  const children = text('text', 'TEXT');
  return decoratedAction.withActions({ 'click dsm-button': 'Native button clicked!' })(
    () =>
      `<div class="dsm-container">
          <dsm-button icon="${icon}" ${disabled ? 'disabled' : ''}>${children}</dsm-button>
        </div>
      `
  );
};

simpleButton.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    'in-dsm': {
      docFilePath: '../components/button/button.docs.json',
      containerClass: 'dsm-container'
    },
    docs: { page: buttonDocs }
  }
};
