import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Insert Link Api Inside String 
  private url = "";

  constructor(private http:HttpClient) { }


  // Function Get All Books From Api 
  getAllBooks() {
     return this.http.get(this.url);
  }



}
