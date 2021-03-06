import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  LoginToken: any = {};
  userLogin: boolean = false;
  signUp: boolean = false;
  userInfo: any = {};
  private LoginUrl = `http://127.0.0.1:8000/login/`
  private RegisterUrl = `http://127.0.0.1:8000/api/user/register/`
  private FetchUserUrl = `http://127.0.0.1:8000/api/user/mypage/`
  private UpdateUserUrl = `http://127.0.0.1:8000/api/user/auth_update/`
  private RefreshTokenUrl = `http://127.0.0.1:8000/token-refresh/`
  private DeleteUserUrl = `http://127.0.0.1:8000/api/user/delete/`

  constructor(
    private http: Http,
    private router: Router
  ){}

  login(email: string, password: string) {
    return this.http
      .post(this.LoginUrl, {email: email, password: password})
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token){
          localStorage.setItem('auth_angular_user', JSON.stringify(user));
          this.checkLogin();
        }
      });
  }

  logout() {
    localStorage.removeItem('auth_angular_user');
    this.userLogin = false;
    this.LoginToken = {};
    this.userInfo = {};
    this.router.navigate(['/auth']);
  }

  signup(email: string, password:string, username:string, profile?:string) {
    return this.http
      .post(
        this.RegisterUrl,
        {email: email, password: password, username: username, profile: profile}
      );
  }

  fetchUserInfo() {
    return this.http
      .get(this.FetchUserUrl, this.jwt())
      .subscribe(
        res => {
          this.userInfo = res.json();
        },
        error => {
          console.log(error);
        }
      );
  }

  updateUserInfo(userUpdateInfo) {
    return this.http
      .put(this.UpdateUserUrl,
        userUpdateInfo,
        this.jwt()
      );
  }

  checkPassword(oldUserInfo) {
    return this.http
      .post(this.LoginUrl, oldUserInfo);
  }

  deleteUser() {
    return this.http
      .delete(this.DeleteUserUrl, this.jwt());
  }

  checkLogin() {
    if (localStorage.getItem('auth_angular_user')) {
      this.userLogin = true;
      this.LoginToken = JSON.parse(localStorage.getItem('auth_angular_user'));
      this.fetchUserInfo();
    } else {
      this.router.navigate(['/auth']);
    }
  }

  jwt() {
    if (this.LoginToken) {
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.LoginToken.token });
      return new RequestOptions({ headers: headers });
    }
  }

  tokenRefresh() {
    return this.http
      .post(this.RefreshTokenUrl, this.LoginToken)
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token){
          localStorage.setItem('auth_angular_user', JSON.stringify(user));
          this.checkLogin();
        }
      });
  }
}
