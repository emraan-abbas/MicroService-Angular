import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUserService(loginForm:any){
    return this.http.post("http://localhost:3000/login", loginForm)
  }


  
  tokenCheck(param:any){
    return this.http.post("http://localhost:3000/email-verify", param)
  }


  callRefershToken(payload:any){
    return this.http.post("http://localhost:3000/check",payload);  // /auth/refreshtoken
  }


}
