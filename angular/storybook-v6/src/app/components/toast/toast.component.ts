import { Component, Input } from '@angular/core';

/**
 * Toasts provide dismissable feedback\information for the user.
 * */
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

  /**
   * The content of the toast
   * */
  @Input()
  text: string;

  /**
   * Changes the visual display of the toast
   * */
  @Input()
  status: 'default' | 'warning' | 'error' | 'info' | 'success' = 'default';
}
