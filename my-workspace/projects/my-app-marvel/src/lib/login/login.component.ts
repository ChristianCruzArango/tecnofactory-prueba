import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app-marvel-lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('container', { static: false }) container!: ElementRef;

  constructor(){}
  

  login(){
    this.container.nativeElement.classList.remove('sign-up-mode');
  }

  register(){
    this.container.nativeElement.classList.add('sign-up-mode');
  }

}
