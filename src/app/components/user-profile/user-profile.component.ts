import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class UserProfileComponent {
    constructor(public auth: AuthService) { }
}