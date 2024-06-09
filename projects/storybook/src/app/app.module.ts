import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreComponentsModule} from "../../../core-components/src/lib/core-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
