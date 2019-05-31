import { Component, Input } from '@angular/core';

@Component({
  selector: 'toast-component',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input()
  text: string;

  @Input()
  status: 'default' | 'warning' | 'error' | 'info' | 'success' = 'default';
}
