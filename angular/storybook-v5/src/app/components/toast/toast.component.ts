import { Component, Input } from '@angular/core';

@Component({
  selector: 'toast-component',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  icons = {
    default: 'flagIcon',
    warning: 'warnIcon',
    success: 'checkmarkIcon',
    error: 'errorIcon',
    info: 'infoIcon'
  };

  @Input()
  text: string;

  @Input()
  status: 'default' | 'warning' | 'error' | 'info' | 'success' = 'default';
}
