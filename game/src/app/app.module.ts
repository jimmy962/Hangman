import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WordentryComponent} from './Component/wordentry/wordentry.component'
import {HttpModule} from '@angular/http'
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, WordentryComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
