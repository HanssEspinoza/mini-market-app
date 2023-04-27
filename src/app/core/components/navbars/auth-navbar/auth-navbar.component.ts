import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-navbar.component.html'
})
export class AuthNavbarComponent {

}
