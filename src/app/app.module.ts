import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActionBarModule } from '@sdo/web-components/action-bar';
import { MyLibModule } from '@sdo/web-components/lib';
import { MyLibModule2 } from '@sdo/web-components/lib2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActionBarModule,
    MyLibModule,
    MyLibModule2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
