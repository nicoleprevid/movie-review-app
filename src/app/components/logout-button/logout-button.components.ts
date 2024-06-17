import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'logout-button',
  template: `
  <button class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-sm md:text-md" (click)="logout()">
    Log out
  </button>
  `,
  standalone: true
})
export class LogoutButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}