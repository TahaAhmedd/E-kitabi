import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from 'src/app/Model/ApiResponse';

import {Bookes} from '../../Model/Bookes'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // Insert Link Api Inside String
  // allBooke :Bookes |any=[]
  // private url = 'http://localhost:4000/book/all';

  constructor(private http: HttpClient) {}

  // Function Get All Books From Api
//   getAllBooks() {
//     console.log('hell');
//     this.http
//       .get<{[key:string]:Bookes}>('http://localhost:4000/book/all')
//       .pipe(
//         map((res) => {
//           const bookes = []
//           // for(const key in res){
//             // console.log({res});
//           const  {data ,message,success}=res
//           // bookes.push({...res})
          
          
//           return data

//         })
//       )
// .subscribe((data) => {
//         this.allBooke=data
//         console.log(this.allBooke);
        
//       });
//   }

  getAll():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${environment.PathApi}/book/all`);
  }
  // Function Get Book By Id Api
  getBookByID(Id:number) {
    console.log(Id)
    return this.http.get(`${environment.PathApi}/book/books/${Id}`);
  }


  // Function Get Book By CaticoryFrom Api
  getBookByCatigory(category: any) {
    return this.http.get(`${environment.PathApi}/book/books/${category}`);
  }


  // Function Add Book From Api
  postBook(book: any) {
    return this.http.post(`${environment.PathApi}/book/newbook`, book);
  }


  // Function Delte b Book
  deletBook(id : number) {
    return this.http.delete(`${environment.PathApi}/book/delete/${id}`);
  }


  // Function Edit  Book From Api
  editBook(id:number , data:any) {
    return this.http.put(`${environment.PathApi}/book/update/${id}`,data);
  }
}
