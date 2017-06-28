import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mypage',
  templateUrl: '../templates/change_password.component.html',
})
export class ChangePasswordComponent{
  changePasswordSuccessMessage: string;
  changePasswordErrorMessage: string;
  oldPassword: string;
  newPassword: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.changePasswordSuccessMessage = null;
    this.changePasswordErrorMessage = null;
  }

  changePassword(){
    this.authService.checkPassword(
      {email: this.authService.userInfo.email, password: this.oldPassword}
    )
    .subscribe(
      res => {
        this.authService.updateUserInfo({
          email: this.authService.userInfo.email,
          password: this.newPassword,
          username: this.authService.userInfo.username,
          profile: this.authService.userInfo.profile,
        })
        .subscribe(
          res => {
            this.changePasswordSuccessMessage = "パスワードを更新しました";
            this.changePasswordErrorMessage = null;
          },
          error => {
            this.changePasswordErrorMessage = "パスワード更新に失敗しました";
            this.changePasswordSuccessMessage = null;
          }
        )
      },
      error =>{
        this.changePasswordErrorMessage = "パスワード更新に失敗しました";
        this.changePasswordSuccessMessage = null;
      }
    );
  }
}
