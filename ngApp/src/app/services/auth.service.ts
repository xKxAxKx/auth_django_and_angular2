import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  userLogin: boolean = false;
  signUp: boolean = false;
  private AuthUrl = `http://127.0.0.1:8000/login/`

  constructor(
    private http: Http,
    private router: Router
  ){}

  login(email: string, password: string) {
    return this.http
      .post(this.AuthUrl, {email: email, password: password})
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

  signup(username: string, password:string, email:string, profile?:string) {
    console.log("test");
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
}
