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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.checklogin();
  }

  login() {
    this.authService.login(this.loginuser.email, this.loginuser.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.errorMessage = "メールアドレスかかパスワードが間違っています";
        }
      );
  }


  signup(): void{

  }

  deleteUser(): void{

  }

  editUser(): void{

  }

  checklogin(): void {
    if(localStorage.getItem('auth_angular_user')) {
      this.router.navigate(['/']);
    }
  }

}
