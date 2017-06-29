import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: '../templates/reset_password.component.html',
})
export class ResetPasswordComponent {
  resetPasswordEmail: string = '';
  newPassword: string;

  get isAbleResetPassword(): boolean {
    return this.resetPasswordEmail.length > 0;
  }

  resetPassword(){
    console.log(this.resetPasswordEmail);
  }
}
