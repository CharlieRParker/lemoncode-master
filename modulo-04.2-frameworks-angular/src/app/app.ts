import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HeaderPublicComponent } from './components/header-public/header-public';
import { HeaderPrivateComponent } from './components/header-private/header-private';
import { MenuPublicComponent } from './components/menu-public/menu-public';
import { MenuPrivateComponent } from './components/menu-private/menu-private';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderPublicComponent, HeaderPrivateComponent, MenuPublicComponent, MenuPrivateComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('angular-app');

  constructor(public authService: AuthService) { }
}
