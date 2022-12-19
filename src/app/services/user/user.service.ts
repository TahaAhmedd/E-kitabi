import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  httpOption;
  token: string
  constructor(private http: HttpClient,
    private toast: ToastrService,
    private router: Router
  ) {
    this.httpOption = {
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

  loged(data: any) {
    this.login(data).subscribe({
      next: (result) => {
        console.log(result.data)
        this.token = result.data.token
        let id = result.data._id
        localStorage.setItem("toomvdvdsvdvken", this.token)
        localStorage.setItem("id", id)
      },
      error: () => {
        this.toast.error("The Email Or Password Is Not Valid", "Error")
      },
      complete: () => {
        this.router.navigate(['dashboard/card'])
      }
    })
  }



  //log out Admin
  Logout() {
    localStorage.removeItem('toomvdvdsvdvken');
    localStorage.removeItem('id');
  }

  //property
  get IsUserloged(): boolean {
    return localStorage.getItem('toomvdvdsvdvken') != null ? true : false;
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
  getUserById(id: any): Observable<userGet> {

    return this.http.get<userGet>(`${environment.PathApi}/admin/user/${id}`)

  }


}

interface userlogin {
  // id:any;
  Email: string;
  Password: string;
}


class userGet {
  data: [];
  sucsess: true
  message: ''
}