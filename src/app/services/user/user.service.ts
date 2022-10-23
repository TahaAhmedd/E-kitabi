import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { PathUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private  isloginuser !:BehaviorSubject<boolean>
  constructor(private http:HttpClient) { 
    this.isloginuser=new BehaviorSubject<boolean>(this.IsUserloged)
   }

    login(DAta: any):Observable<any>
    { 
        return  this.http.post(`https://fake-login-api-production.up.railway.app/api/auth/login`,DAta) 
    };
    Logout ()
    {
      localStorage.removeItem('token'); 
    };
     get IsUserloged():boolean
     {
       return (localStorage.getItem('token')!=null)? true: false
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
