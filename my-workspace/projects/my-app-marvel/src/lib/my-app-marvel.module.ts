import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CardComicComponent } from './card-comic/card-comic.component';
import { CardComicDetailComponent } from './card-comic-detail/card-comic-detail.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    LoginComponent,
    CardComicComponent,
    CardComicDetailComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    CardComicComponent,
    LoadingComponent
  ]
})
export class MyAppMarvelModule { }
