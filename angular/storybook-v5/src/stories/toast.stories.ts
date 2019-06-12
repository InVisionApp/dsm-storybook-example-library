import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ToastComponent } from '../app/components/toast/toast.component';
import { AppIconComponent } from '../app/components/icons/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ToastComponent, AppIconComponent],
      imports: [HttpClientModule, AngularSvgIconModule]
    })
  )
  .addParameters({
    backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }]
  })
  .add(
    'Toast Component',
    () => {
      const statusOptions = {
        default: 'default',
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info'
      };

      return {
        template: '<toast-component [status]="statusKnob" [text]="textKnob" ></toast-component>',
        props: {
          textKnob: text('text', 'This is a notification message'),
          statusKnob: select('status', statusOptions, statusOptions.default)
        }
      };
    },
    { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b', version: '1.0.0', componentPath: '../app/components/toast/toast.component' } }
  );
