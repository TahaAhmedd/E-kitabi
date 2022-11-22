import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { Bookes } from '../../Model/Bookes';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/all`);
  }

  // Function Get Book By Id Api
  getBookByID(Id: String) {
    console.log(Id);
    return this.http.get<ApiResponse>(
      `${environment.PathApi}/book/getbyid/${Id}`
    );
  }

  // Function Get Book By CaticoryFrom Api
  getBookByCatigory(category: any): Observable<ApiResponse> {
    console.log(category);
    return this.http.get<ApiResponse>(
      `${environment.PathApi}/book/books/${category}`
    );
  }
  getBookByTitle(title: string) {
    console.log(title);

    return this.http.get(`${environment.PathApi}/book/books/${title}`);
  }

  // Function Add Book From Api
  postBook(book: any) {
    return this.http.post(`${environment.PathApi}/book/newbook`, book);
  }

  // Function Delte b Book
  deletBook(id: number) {
    return this.http.delete(`${environment.PathApi}/book/delete/${id}`);
  }

  // Function Edit  Book From Api
  editBook(id: number, data: any) {
    return this.http.put(`${environment.PathApi}/book/update/${id}`, data);
  }
  //Function Search about Book
  searchBooke(search: string):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/search/${search}`);
  }
}
