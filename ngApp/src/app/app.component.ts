import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <header header></header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
    private authService: AuthService,
  ){}

  ngOnInit() {
    if (localStorage.getItem('auth_angular_user')) {
      this.authService.userLogin = true;
    }
  }

}
