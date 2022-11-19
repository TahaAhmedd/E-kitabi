import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Bookes} from '../../Model/Bookes'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // Insert Link Api Inside String
  allBooke :Bookes |any=[]
  private url = 'http://localhost:4000/book/all';

  constructor(private http: HttpClient) {}

  // Function Get All Books From Api
  getAllBooks() {
    console.log('hell');
    this.http
      .get<{[key:string]:Bookes}>('http://localhost:4000/book/all')
      .pipe(
        map((res) => {
          const bookes = []
          // for(const key in res){
            // console.log({res});
          const  {data ,message,success}=res
          // bookes.push({...res})
          
          
          return data

        })
      )
.subscribe((data) => {
        this.allBooke=data
        console.log(this.allBooke);
        
      });
  }
  // Function Get Book By Id Api
  getBookByID() {
    return this.http.get(this.url);
  }
  // Function Get Book By CaticoryFrom Api
  getBookByCaticory(category: any) {
    return this.http.get(this.url);
  }
  // Function Add Book From Api
  postBook(book: any) {
    return this.http
      .post('http://localhost:4000/book/newbook', book)
      .subscribe((res) => {
        console.log(res);
      });
  }
  // Function Delte b Book
  deletBook() {
    return this.http.delete(this.url, {});
  }
  // Function Edit  Book From Api
  editBook() {
    return this.http.put(this.url, {});
  }
}
