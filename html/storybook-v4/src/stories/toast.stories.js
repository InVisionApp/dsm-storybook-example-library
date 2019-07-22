import { storiesOf } from '@storybook/html';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { toastIcons } from '../components/utils/icons/toast-icons';
import { closeIcon } from '../components/utils/icons';
import '../components/toast/_toast.scss';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }]
  })
  .add(
    'Toast',
    () => {
      const statusOptions = {
        default: 'default',
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      };

      const status = select('status', statusOptions, statusOptions.default);
      const toastText = text('text', 'This is a notification message');

      return `
<div class="dsm-container">
    <div class="dsm-toast${status !== statusOptions.default ? ` dsm-toast--${status}` : ''}">
      ${toastIcons[status]}
      <span class="dsm-toast__content">${toastText}</span>
      <div class="dsm-toast__close-icon">${closeIcon}</div>
    </div>
</div>`;
    },
    {
      'in-dsm': {
        id: '5ce17ca24d0426001d9d3599',
        docFilePath: '../components/toast/toast.docs.json',
        containerClass: 'dsm-container'
      }
    }
  );
