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

  updateUserInfo() {
    this.authService.updateUserInfo({
      email: this.editUserEmail,
      username: this.editUserName,
      profile: this.edtiUserProfile
    });
  }

  changePassword() {

  }

  deleteUser(){

  }

  setFormData() {
    this.editUserEmail = this.authService.userInfo.email;
    this.editUserName = this.authService.userInfo.username;
    this.edtiUserProfile = this.authService.userInfo.profile;
  }
}
