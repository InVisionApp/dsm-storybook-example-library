import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button/button.component';
import { AppIconComponent } from '../app/components/icons/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent, AppIconComponent],
      imports: [HttpClientModule, AngularSvgIconModule]
    })
  )
  .add(
    'Button Component',
    () => ({
      template:
        '<button dsm-button (didClick)="actionProp()" [text]="textKnob" [icon]="iconKnob" [disabled]="disabledKnob"></button>',
      props: {
        textKnob: text('text', 'TEXT'),
        iconKnob: select('icon', ['none', 'chevron-right'], 'none'),
        disabledKnob: boolean('disabled', false),
        actionProp: () => action('Button clicked')('Click')
      }
    }),
    {
      'in-dsm': {
        id: '5cf5371e4ffc3ff59fd5ee1a',
        versionFilePath: '../app/components/button/versionFile.json',
        componentPath: '../app/components/button/button.component'
      }
    }
  );
