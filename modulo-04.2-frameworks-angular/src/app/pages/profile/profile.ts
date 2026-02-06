import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
  constructor(private authService: AuthService) { }

  get username() {
    return this.authService.getUsername();
  }
}
