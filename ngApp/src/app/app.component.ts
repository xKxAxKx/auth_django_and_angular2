import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header header></header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
  ){}

  ngOnInit() {
  }

}
