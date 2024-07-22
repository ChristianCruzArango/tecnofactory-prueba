import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppMarvelModule } from 'my-app-marvel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyAppMarvelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
