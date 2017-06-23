import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: '../templates/auth.component.html',
  styleUrls: ['../static/auth.component.css']
})
export class AuthComponent {
  loginuser: any = {};
  signup_user: any = {};
  returnUrl: string;
  loginErrorMessage: string;
  signUpErrorMessage: string;
  signUpValidMessage: string;

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
          this.signUpValidMessage = null;
          this.loginErrorMessage = "メールアドレスかパスワードが正しくありません";
        }
      );
  }


  signup() {
    this.authService.signup(this.signup_user.email, this.signup_user.password, this.signup_user.username, this.signup_user.profile)
      .subscribe(
        data => {
          this.router.navigate(['/auth']);
          this.signup_user = {};
          this.authService.signUp = false;
          this.signUpErrorMessage = null;
          this.loginErrorMessage = null;
          this.signUpValidMessage = "ユーザ作成が完了しました"
        },
        error => {
          this.signUpErrorMessage = "ユーザ作成が失敗しました";
        }
      );
  }

  checklogin(): void {
    if(localStorage.getItem('auth_angular_user')) {
      this.router.navigate(['/']);
    }
  }

}
