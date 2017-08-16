import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    LanguageComponent,
    AppComponent
  ],
  imports: [
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
