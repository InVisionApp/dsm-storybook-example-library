import { storiesOf } from '@storybook/html';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { chevronRightIcon } from '../components/utils/icons';
import '../components/button/_button.scss';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => {
      const buttonIcons = {
        'chevron-right': chevronRightIcon
      };

      const availableIcons = {
        none: '',
        'chevron-right': 'chevron-right'
      };

      const icon = select('icon', availableIcons, availableIcons.none);
      const disabled = boolean('disabled', false);
      const children = text('text', 'TEXT');

      return withActions({ 'click .dsm-btn': 'Button clicked!' })(
        () => `
<div class="dsm-container">
    <button class="dsm-btn${icon !== availableIcons.none ? ' dsm-btn--with-icon' : ''}" ${disabled ? 'disabled' : ''}>
      <div class="dsm-btn__content">${children}</div>
      ${icon !== availableIcons.none ? buttonIcons[icon] : ''}
    </button>
</div>`
      );
    },
    {
      'in-dsm': {
        id: '5ce17ca24d0426001d9d3599',
        docFilePath: '../components/button/button.docs.json',
        containerClass: 'dsm-container'
      }
    }
  );
