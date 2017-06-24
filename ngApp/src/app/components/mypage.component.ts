import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mypage',
  templateUrl: '../templates/mypage.component.html',
  styleUrls: ['../static/mypage.component.css']
})
export class MypageComponent {
  editUserInfo: any = {};
  editUserEmail: string;
  editUserName: string;
  edtiUserProfile: string;
  updateSuccessMessage: string;
  updateErrorMessage: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
    setTimeout(() => {
      this.setFormData();
    }, 500);
  }

  ngOnDestroy() {
    this.updateSuccessMessage = null;
    this.updateErrorMessage = null;
  }

  updateUserInfo() {
    this.authService.updateUserInfo({
      email: this.editUserEmail,
      username: this.editUserName,
      profile: this.edtiUserProfile
    })
    .subscribe(
      data => {
        this.updateSuccessMessage = "ユーザ情報を更新しました";
        this.updateErrorMessage = null;
        this.authService.fetchUserInfo();
      },
      error => {
        this.updateErrorMessage = "ユーザ情報更新に失敗しました";
        this.updateSuccessMessage = null;
      }
    );
  }

  changePassword() {

  }

  userDelete(){

  }

  setFormData() {
    this.editUserEmail = this.authService.userInfo.email;
    this.editUserName = this.authService.userInfo.username;
    this.edtiUserProfile = this.authService.userInfo.profile;
  }
}
