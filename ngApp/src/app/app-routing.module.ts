import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }    from './components/main.component';
import { AuthComponent }      from './components/auth.component';
import { MypageComponent }      from './components/mypage.component';
import { UserDeleteComponent } from './components/user_delete.component';
import { ChangePasswordComponent } from './components/change_password.component';
import { ResetPasswordComponent } from './components/reset_password.component';
import { AuthGuard }      from './guards/auth.guard';

const routes: Routes = [
  { path: '',  component: MainComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent },
  { path: 'mypage', component: MypageComponent },
  { path: 'user_delete', component: UserDeleteComponent },
  { path: 'change_password', component: ChangePasswordComponent },
  { path: 'reset_password', component: ResetPasswordComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
