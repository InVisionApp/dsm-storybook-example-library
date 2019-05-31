import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string;

  @Input()
  disabled: boolean = false;

  @Input()
  icon: 'none' | 'chevron-right' = 'none';

  @Input()
  onClick: Function = () => {};
}
