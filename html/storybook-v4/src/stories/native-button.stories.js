import { storiesOf } from '@storybook/html';
import { decorate } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { NativeButton } from '../components/native-button/native-button';

customElements.define('dsm-button', NativeButton);
const decoratedAction = decorate([() => ['Click']]);

storiesOf('Native Component Button', module)
  .addDecorator(withKnobs)
  .add(
    'Simple Button',
    () => {
      const availableIcons = {
        none: '',
        'chevron-right': 'chevron-right'
      };

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
    },
    {
      'in-dsm': {
        id: '5ce17ca24d0426001d9d3599',
        docFilePath: '../components/button/button.docs.json',
        containerClass: 'dsm-container'
      }
    }
  );
