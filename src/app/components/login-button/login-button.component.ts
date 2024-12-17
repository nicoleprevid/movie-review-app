import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'login-button',
  template: '<button class="hover:scale-105 rounded px-5 py-2 text-white bg-gray-900 font-bold  hover:opacity-60 transition-all  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 shadow-lg" (click)="login()">Log in</button>',
  standalone: true
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
}