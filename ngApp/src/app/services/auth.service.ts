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
  private RetrieveUpdateUrl = `http://127.0.0.1:8000/api/user/mypage/`

  constructor(
    private http: Http,
    private router: Router
  ){}

  login(email: string, password: string) {
    return this.http
      .post(this.LoginUrl, {email: email, password: password})
      .map((response: Response) =>{
        let user = response.json();
        if (user && user.token){
          localStorage.setItem('auth_angular_user', JSON.stringify(user));
          this.LoginToken = localStorage.getItem('auth_angular_user');
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
      .get(this.RetrieveUpdateUrl, this.jwt())　
      .subscribe(
        res => {
          this.userInfo = res.json();
        },
        error => {
          console.log("未ログイン");
        }
      );
  }

  updateUserInfo(userInfo) {
    console.log(userInfo);
    return this.http
      .put(this.RetrieveUpdateUrl,
        userInfo,
        this.jwt()
      );
  }

  changePassword() {
    console.log("test");
  }

  deleteUser() {
    console.log("test");
  }

  checkLogin() {
    if (localStorage.getItem('auth_angular_user')) {
      this.userLogin = true;
      this.LoginToken = JSON.parse(localStorage.getItem('auth_angular_user'));
      this.fetchUserInfo();
    }
  }

  jwt() {
    if (this.LoginToken) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.LoginToken.token });
        return new RequestOptions({ headers: headers });
    }
  }
}
