import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.component';
import { AppIconComponent } from '../app/components/icons/app-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
// @ts-ignore
import buttonDocs from './button.mdx';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, AppIconComponent],
      imports: [HttpClientModule, AngularSvgIconModule]
    })
  ],
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: '5c86295038392c00aafece83',
      versionFilePath: '../app/components/button/versionFile.json',
      componentPath: '../app/components/button/button.component'
    }
  }
};

export const simpleButton = (args) => ({
  component: ButtonComponent,
  props: {
    ...args
  }
});

simpleButton.args = {
  text: 'Text',
  disabled: false,
  icon: 'none'
};

simpleButton.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: '../app/components/button/versionFile.json' },
    docs: { page: buttonDocs }
  }
};
