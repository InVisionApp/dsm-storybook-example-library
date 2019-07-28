import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

/**
 * Buttons indicate actions on the page.
 * */
@Component({
  selector: 'button[dsm-button]',
  host: {
    class: 'c-button',
    '[class.disabled]': 'disabled',
    '[class.with-icon]': "(icon !== 'none')",
    '(click)': '!disabled && action()'
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  icons = {
    'chevron-right': 'chevronRightIcon'
  };

  /**
   * The content of the Button
   * */
  @Input()
  text: string = '';

  /**
   * Disable state of the button
   * */
  @Input()
  disabled: boolean = false;

  /**
   * Adds an icon to the button
   */
  @Input()
  icon: 'none' | 'chevron-right' = 'none';

  /**
   * The function to be called when the button is clicked
   */
  @Output()
  didClick = new EventEmitter<void>();

  action() {
    this.didClick.emit();
  }
}
