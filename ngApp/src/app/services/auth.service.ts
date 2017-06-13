import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  userLogin: boolean = false;
  signUp: boolean = false;
  private LoginUrl = `http://127.0.0.1:8000/login/`
  private RegisterUrl = `http://127.0.0.1:8000/api/user/register/`

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
          this.userLogin = true;
        }
      });
  }

  logout() {
    localStorage.removeItem('auth_angular_user');
    this.userLogin = false;
    this.router.navigate(['/auth']);
  }

  signup(email: string, password:string, username:string, profile?:string) {
    return this.http
      .post(
        this.RegisterUrl,
        {email: email, password: password, username: username, profile: profile}
      );
    // .subscribe(
    //   (res) => {
    //     this.router.navigate(['/auth']);
    //   },
    //   (err) => {
    //     console.log("error!");
    //   }
    // );
  }

  changeProfile() {
    console.log("test");
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
    }
  }
}
