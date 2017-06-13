import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: '../templates/auth.component.html'
})
export class AuthComponent {
  loginuser: any = {};
  returnUrl: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {

  }

  login() {

  }


  signup(): void{

  }

  deleteUser(): void{

  }

  editUser(): void{

  }

  checklogin(): void {

  }

}
