import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directive/dropdown-directive';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
