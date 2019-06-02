import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, NavComponent, ToastComponent],
  imports: [BrowserModule, HttpClientModule, AngularSvgIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
