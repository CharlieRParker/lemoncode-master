import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-private',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header-private.html',
  styleUrl: './header-private.scss',
})
export class HeaderPrivateComponent {
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
