import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background:dodgerblue; color: Black;font-family: "Arial Black"}',
    'li a { color:black}',
    'ul.nav a:hover { color: WHITE  }'
  ]
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  }
