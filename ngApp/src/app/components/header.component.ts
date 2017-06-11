import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent {
  constructor(
    private router: Router,
  ){

  }

  ngOnInit() {

  }

  logout(): void{

  }
}
