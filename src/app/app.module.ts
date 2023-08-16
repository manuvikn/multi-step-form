import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiStepFormModule } from './multi-step-form/multi-step-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiStepFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
