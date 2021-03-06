import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../static/header.component.css']
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ){

  }

  ngOnInit() {

  }
}
