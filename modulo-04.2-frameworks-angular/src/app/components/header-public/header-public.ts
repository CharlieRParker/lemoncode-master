import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-public',
  imports: [MatIconModule, RouterModule],
  templateUrl: './header-public.html',
  styleUrl: './header-public.scss',
})
export class HeaderPublicComponent {

}
