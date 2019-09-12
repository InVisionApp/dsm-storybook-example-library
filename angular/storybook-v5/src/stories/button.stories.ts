import { moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button/button.component';
import { AppIconComponent } from '../app/components/icons/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
// @ts-ignore
import buttonDocs from './button.mdx';

export default {
  title: 'Button',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ButtonComponent, AppIconComponent],
        imports: [HttpClientModule, AngularSvgIconModule]
      })
    ],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: '5c86295038392c00aafece83',
      versionFilePath: '../app/components/button/versionFile.json',
      componentPath: '../app/components/button/button.component'
    }
  }
};

export const simpleButton = () => ({
  template:
    '<button dsm-button (didClick)="actionProp()" [text]="textKnob" [icon]="iconKnob" [disabled]="disabledKnob"></button>',
  props: {
    textKnob: text('text', 'TEXT'),
    iconKnob: select('icon', ['none', 'chevron-right'], 'none'),
    disabledKnob: boolean('disabled', false),
    actionProp: () => action('Button clicked')('Click')
  }
});

simpleButton.story = {
  parameters: {
    docs: { page: buttonDocs }
  }
};
