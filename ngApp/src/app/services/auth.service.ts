import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class AuthService {
  userLogin: boolean = false;
  signUp: boolean = false;
  private AuthUrl = `http://127.0.0.1:8000/api-auth/`

  constructor(
    private http: Http
  ){}

  login(username: string, password: string) {

  }

  logout() {

  }

  signup(username: string, password:string, email:string) {
    console.log("test");
  }
}
