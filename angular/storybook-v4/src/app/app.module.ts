import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ToastComponent } from './components/toast/toast.component';
import { ButtonComponent } from './components/button/button.component';
import { AppIconComponent } from './components/icons/app-icon.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ToastComponent, ButtonComponent, AppIconComponent],
  imports: [BrowserModule, HttpClientModule, AngularSvgIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
