import { chevronRightIcon } from '../utils/icons';
import { styles } from './styles';

export class nativeButton extends HTMLElement {
  constructor() {
    super();

    const buttonIcons = {
      'chevron-right': chevronRightIcon
    };

    const icon = this.getAttribute('icon');
    icon !== '' ? (this.icon = buttonIcons[icon]) : (this.icon = '');

    this.contents =
      styles +
      `<button class="dsm-btn dsm-btn--with-icon" ${this.hasAttribute('disabled') ? 'disabled' : ''}>
          <div class="dsm-btn__content">${this.textContent}</div>
          ${this.icon}
        </button>`;

    this.attachShadow({ mode: 'open' }).innerHTML = this.contents;
  }
}
