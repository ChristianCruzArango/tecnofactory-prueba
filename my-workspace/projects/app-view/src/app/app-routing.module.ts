import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComicsComponent } from './lists-comics/lists-comics.component';
import { LoginComponent } from 'my-app-marvel';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list-comics', component: ListsComicsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
