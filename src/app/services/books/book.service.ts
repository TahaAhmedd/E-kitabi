import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRespaginat, ApiResponse, ApiResponse0, ApiResultBookById } from 'src/app/Model/ApiResponse';
import {Bookes} from '../../Model/Bookes'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/all`);
  }

  // Function Get Book By Id Api
  getBookByID(Id:String):Observable<ApiResponse> {
    // console.log(Id)
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/getbyid/${Id}`);
  }


  // Function Get Book By CaticoryFrom Api
  getBookByCatigory(category: any ,pagNum:number): Observable<ApiRespaginat> {
    // console.log(category);
    return this.http.get<ApiRespaginat>(
      `${environment.PathApi}/book/books/${category}/${pagNum}`
    );
  }
  getBookBySub(subCategoryName: any ,pagNum:number): Observable<ApiRespaginat> {
    // console.log(category);
    return this.http.get<ApiRespaginat>(
      `${environment.PathApi}/book/booksub/${subCategoryName}/${pagNum}`
    );
  }
  getBookByTitle(title: string) {
    // console.log(title);
    return this.http.get(`${environment.PathApi}/book/books/${title}`);
  }

  // Function Add Book From Api
  postBook(book: any) {
    return this.http.post(`${environment.PathApi}/book/newbook`, book);
  }

  // Function Delte b Book
  deletBook(id: any) {
    return this.http.delete(`${environment.PathApi}/book/delete/${id}`);
  }

  // Function Edit  Book From Api
  editBook(id: number, data: any) {
    return this.http.put(`${environment.PathApi}/book/update/${id}`, data);
  }
  //Function Search about Book
  searchBooke(search: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/search/${search}`);
  }
  //function get AllBook with pagination
  getWithPagination(pagNum: Number): Observable<ApiRespaginat> {
    return this.http.get<ApiRespaginat>(`${environment.PathApi}/book/paginate/${pagNum}`)
  }
}
