import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  observable,
  Observable,
  retry,
  Subject,
  throwError,
} from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOption ;
  isloginuser:BehaviorSubject<boolean>
  constructor(private http:HttpClient) {
    this.isloginuser = new BehaviorSubject(false) 
    this.httpOption ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('data not found:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  //login Admin
  login(DAta: any): Observable<any> {
    return this.http
      .post(`${environment.PathApi}/admin/login`, DAta, this.httpOption)
      .pipe(retry(2), catchError(this.handleError));
  }
   //login Admin
    // login(DAta: any):Observable<any>
    // { 
    //     return  this.http.post(`${environment.PathApi}/admin/login`, DAta ,this.httpOption)
    //     .pipe(
    //       retry(2),
    //       catchError(this.handleError)
    //     ) 
    // };

    //log out Admin
    // Logout ()
    // {
    //   localStorage.removeItem('token'); 
    //   localStorage.removeItem('id')
    //   this.isloginuser.next(false)
    // };

//property 
    //  get IsUserloged():boolean
    //  {
    //   let tok = localStorage.getItem('token')
      
    //    return (localStorage.getItem('token')!=null)? true: false
    //  }

//update Account 
// update(accountId:any ,data :any):Observable<any>
// {
//    return  this.http.put(`${environment.PathApi}/admin/update/${accountId}`,data, this.httpOption)
//    .pipe(
//     retry(2),
//     catchError(this.handleError)
//   ) 
// }



 

  //log out Admin
  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  //property
  get IsUserloged(): boolean {
    return localStorage.getItem('token') != null ? true : false;
  }

  //update Account
  update(accountId: any, data: any): Observable<any> {
    return this.http
      .put(
        `${environment.PathApi}/admin/update/${accountId}`,
        data,
        this.httpOption
      )
      .pipe(retry(2), catchError(this.handleError));
  }
  getUserById():Observable<userGet>
  {
    
    return this.http.get<userGet>(`${environment.PathApi}/admin/user`)

  }


}

interface userlogin {
  Email: string;
  Password: string;
}


class userGet {
  data: [];
  sucsess: true
  message:''
}