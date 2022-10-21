import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // loginuser:Observable<string>
  constructor(private httb:HttpClient) { 
    // this.loginuser = new Observable<string>
  }
 
  // getUser(user:userlogin){
  //   console.log(user)
  //   let optios = {
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/josn'
  //     })
    // }
    // return this.httb.post("https://kitabi.azurewebsites.net/api/auth/login",{"Email":user.Email,"Password":user.Password})
    // return this.httb.post("https://kitabi.azurewebsites.net/api/auth/login",JSON.stringify( user),optios)
  }

// }
interface userlogin{
  Email:string;
  Password:string
}
