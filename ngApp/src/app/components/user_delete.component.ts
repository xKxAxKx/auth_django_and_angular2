import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mypage',
  templateUrl: '../templates/user_delete.component.html',
})
export class UserDeleteComponent{

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
  }

  userDelete(){
    this.authService.deleteUser()
    .subscribe(
      data => {
        this.authService.logout();
      },
      error => {
        console.log(error);
      }
    );
  }
}
