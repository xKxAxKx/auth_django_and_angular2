import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }    from './components/main.component';
import { AuthComponent }      from './components/auth.component';
import { MypageComponent }      from './components/mypage.component';
import { AuthGuard }      from './guards/auth.guard';

const routes: Routes = [
  { path: '',  component: MainComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent },
  { path: 'mypage', component: MypageComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
