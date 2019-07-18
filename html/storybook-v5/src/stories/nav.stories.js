import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import '../components/nav/_nav.scss';

const navWrapper = (storyFn) => `<div style="background-color:white;padding: 25px">${storyFn()}</div>`;

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(navWrapper)
  .add(
    'Nav',
    () => {
      const tab1 = text('tab 1', 'one');
      const tab2 = text('tab 2', 'two');
      const tab3 = text('tab 3', 'three');

      $(document).ready(() => {
        $('.dsm-nav__tab').on('click', function(event) {
          $('.dsm-nav__tab-content').removeClass('dsm-nav__tab--active');
          const target = $(event.target);
          target.addClass('dsm-nav__tab--active');
        });
      });

      return withActions({ 'click .dsm-nav__tab': 'Tab clicked!' })(
        () =>
          `
<div class="dsm-container">
    <ul class="dsm-nav">
        <li class="dsm-nav__tab">
            <div class="dsm-nav__tab-content dsm-nav__tab--active">${tab1}</div>
        </li>
        <li class="dsm-nav__tab">
            <div class="dsm-nav__tab-content">${tab2}</div>
        </li>
        <li class="dsm-nav__tab">
            <div class="dsm-nav__tab-content">${tab3}</div>
        </li>
      </ul>
</div>`
      );
    },
    {
      'in-dsm': {
        id: '5ce17ca24d0426001d9d3599',
        docFilePath: '../components/nav/nav.docs.json',
        containerClass: 'dsm-container'
      }
    }
  );
