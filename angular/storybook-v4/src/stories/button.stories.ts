import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
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
      template: '<button-component [text]="textKnob" [icon]="iconKnob" [disabled]="disabledKnob"></button-component>',
      component: ButtonComponent,
      props: {
        textKnob: text('text', 'TEXT'),
        iconKnob: select('icon', ['none', 'chevron-right'], 'none'),
        disabledKnob: boolean('disabled', false)
      }
    }),
    { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
  );
// .add(
//   'with text, using a template',
//   () => ({
//     template: '<storybook-button-component [text]="buttonText"></storybook-button-component>',
//     props: {
//       buttonText: 'Hello NG Button story with template'
//     }
//   }),
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with text and knobs (with a template)',
//   () => {
//     return {
//       component: ButtonComponent,
//       template:
//         '<storybook-button-component [numberProp]="myNumber" [buttonType]="buttonTypeProp" [text]="buttonText"></storybook-button-component>',
//       props: {
//         buttonText: text('button text', 'Hello NG Button'),
//         buttonTypeProp: select('button type', ['primary', 'secondary'], 'primary'),
//         myNumber: number('number prop', 2)
//       }
//     };
//   },
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with knobs in content (with a template)',
//   () => {
//     return {
//       component: ButtonComponent,
//       template: '<storybook-button-component>{{buttonText}}</storybook-button-component>',
//       props: {
//         buttonText: text('button text', 'Hello NG Button')
//       }
//     };
//   },
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with text and knobs (without a template)',
//   () => {
//     return {
//       component: ButtonComponent,
//       props: {
//         text: text('button text', 'Hello NG Button')
//       }
//     };
//   },
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with some emoji',
//   () => ({
//     component: ButtonComponent,
//     props: {
//       text: '😀 😎 👍 💯'
//     }
//   }),
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with some emoji and action',
//   () => ({
//     component: ButtonComponent,
//     props: {
//       text: '😀 😎 👍 💯',
//       onClick: action('This was clicked OMG')
//     }
//   }),
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b' } }
// )
// .add(
//   'with text, using a template - and surrounding elements',
//   () => ({
//     component: ButtonComponent,
//     template:
//       '     <div>      <div>      <storybook-button-component [text]="buttonText"></storybook-button-component>    </div>  </div>   ',
//     props: {
//       buttonText: 'Hola!'
//     }
//   }),
//   { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b', component: 'storybook-button-component' } }
// );
