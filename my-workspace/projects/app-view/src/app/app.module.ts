import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppMarvelModule } from 'my-app-marvel';
import { ListsComicsComponent } from './lists-comics/lists-comics.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComicsComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MyAppMarvelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
