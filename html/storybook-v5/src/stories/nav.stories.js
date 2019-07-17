import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';
import '../components/nav/_nav.scss';

const pickTarget = decorate([(args) => [args[0].target]]);

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'Nav',
    () => {
      const tab1 = text('tab 1', 'one');
      const tab2 = text('tab 2', 'two');
      const tab3 = text('tab 3', 'three');

      $(document).ready(() => {
        $('.dsm-nav li').on('click', function(event) {
          $('.dsm-nav__tab-content').removeClass('dsm-nav__tab--active');
          const target = $(event.target);
          target.addClass('dsm-nav__tab--active');
        });
      });

      return pickTarget.withActions({ 'click .dsm-nav li': 'Tab clicked!' })(
        () =>
          `<div class="dsm-container">
    <ul class="dsm-nav">
        <li>
            <div class="dsm-nav__tab-content dsm-nav__tab--active">${tab1}</div>
        </li>
        <li>
            <div class="dsm-nav__tab-content">${tab2}</div>
        </li>
        <li>
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
