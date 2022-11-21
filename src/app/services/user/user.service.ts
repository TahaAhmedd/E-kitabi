import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private  isloginuser !:BehaviorSubject<boolean>
  constructor(private http:HttpClient) { 
    this.isloginuser=new BehaviorSubject<boolean>(this.IsUserloged)
   }

   //login Admin
    login(DAta: any):Observable<any>
    { 
        return  this.http.post(`${environment.PathApi}/admin/signin`, DAta) 
    };

    //log out Admin
    Logout ()
    {
      localStorage.removeItem('token'); 
      localStorage.removeItem('id')
    };

//property 
     get IsUserloged():boolean
     {
       return (localStorage.getItem('token')!=null)? true: false
     }

//update Account 
update(accountId:any ,data :any):Observable<any>
{
   return  this.http.put(`${environment.PathApi}/admin/update/${accountId}`,data)
}



 




  }





interface userlogin{
  Email:string;
  Password:string
}
