import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Toast from './Toast.vue';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }]
  })
  .add(
    'Toast',
    () => {
      const iconValues = ['default', 'warning', 'error', 'info', 'success'];

      return {
        components: { Toast },
        props: {
          textKnob: { default: text('text', 'This is a notification message') },
          statusKnob: { default: select('status', iconValues, 'default') }
        },
        template: '<toast :status=statusKnob>{{textKnob}}</toast>'
      };
    },
    {
      'in-dsm': { id: '5c4ec4489b3358003a8b612e', componentPath: '../components/Toast.vue' }
    }
  );
