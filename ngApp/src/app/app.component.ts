import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <header header></header>
    <!--
    <div class="container">
      <div class="alert alert-success" role="alert">{{ alertMessage }}</div>
    </div>
    -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
    private authService: AuthService,
  ){}

  ngOnInit() {
    this.authService.checkLogin();
  }

}
