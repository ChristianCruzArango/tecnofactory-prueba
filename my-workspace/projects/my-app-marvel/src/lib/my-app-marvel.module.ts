import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CardComicComponent } from './card-comic/card-comic.component';
import { CardComicDetailComponent } from './card-comic-detail/card-comic-detail.component';



@NgModule({
  declarations: [
    LoginComponent,
    CardComicComponent,
    CardComicDetailComponent
  ],
  imports: [
  ],
  exports: [
    LoginComponent
  ]
})
export class MyAppMarvelModule { }
