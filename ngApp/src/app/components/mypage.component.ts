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

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
    this.editUserInfo = this.authService.userInfo;
  }

  editProfile() {

  }

  changePassword() {

  }

  deleteUser(){

  }
}
