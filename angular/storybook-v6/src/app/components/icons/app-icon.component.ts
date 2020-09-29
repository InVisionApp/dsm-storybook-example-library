import { Component, Input } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

import icons from './index.js';

@Component({
  selector: 'app-icons',
  template: '<svg-icon [applyCss]="true" [src]="icon"></svg-icon>'
})
export class AppIconComponent {
  constructor(private iconReg: SvgIconRegistryService) {
    Object.keys(icons).forEach((key) => this.iconReg.addSvg(key, icons[key]));
  }

  @Input()
  icon: string;
}
