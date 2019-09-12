import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';
import { chevronRightIcon } from '../components/utils/icons';
import '../components/button/_button.scss';
import buttonDocs from '../components/button/button.mdx';

export default {
  title: 'Button',
  parameters: {
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': { id: '5c86295038392c00aafece83' }
  }
};

const decoratedAction = decorate([() => ['Click']]);

const buttonIcons = {
  'chevron-right': chevronRightIcon
};

const availableIcons = {
  none: '',
  'chevron-right': 'chevron-right'
};

export const simpleButton = () => {
  const icon = select('icon', availableIcons, availableIcons.none);
  const disabled = boolean('disabled', false);
  const children = text('text', 'TEXT');

  return decoratedAction.withActions({ 'click .dsm-btn': 'Button clicked!' })(
    () => `
<div class="dsm-container">
    <button class="dsm-btn${icon !== availableIcons.none ? ' dsm-btn--with-icon' : ''}" ${disabled ? 'disabled' : ''}>
      <div class="dsm-btn__content">${children}</div>
      ${icon !== availableIcons.none ? buttonIcons[icon] : ''}
    </button>
</div>`
  );
};

simpleButton.story = {
  parameters: {
    'in-dsm': {
      docFilePath: '../components/button/button.docs.json',
      containerClass: 'dsm-container'
    },
    docs: { page: buttonDocs }
  }
};
