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
    this.authService.deleteUser()
    .subscribe(
      data => {
        this.changePasswordSuccessMessage = "パスワードを更新しました";
        this.changePasswordErrorMessage = null;
      },
      error => {
        this.changePasswordErrorMessage = "パスワードの更新に失敗しました"
        this.changePasswordSuccessMessage = null;
        console.log(error);
      }
    );
  }
}
