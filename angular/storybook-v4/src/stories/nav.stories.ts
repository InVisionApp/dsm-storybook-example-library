import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, object } from '@storybook/addon-knobs';
import { NavComponent } from '../app/components/nav/nav.component';

const navWrapper = (templateFn) => (storyFn) => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template)
  };
};

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [NavComponent]
    })
  )
  .addDecorator(
    navWrapper((content) => `<div style="display: inline-block;background-color: white; padding: 25px">${content}<div>`)
  )
  .add(
    'Nav Component',
    () => {
      const tabs = [{ id: '1', title: 'one' }, { id: '2', title: 'two' }, { id: '3', title: 'three' }];

      return {
        template: '<nav-component [initialActiveTab]="\'1\'" [tabs]="tabsKnob"></nav-component>',
        props: {
          tabsKnob: object('tabs', tabs)
        }
      };
    },
    { 'in-dsm': { id: '5c862a4b73b2a500b5c66f9b', version: '1.0.0', componentPath: '../app/components/nav/nav.component' } }
  );
