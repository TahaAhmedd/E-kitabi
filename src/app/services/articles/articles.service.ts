import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // Add Linke Inside String
  // private url = "localhost:4000/Book";
  private url = "";


  // import HttpClient 
  constructor(private http:HttpClient) { }


  // Function Get From Api 
  getArticles() {
    return this.http.get(this.url);
  }

  

}
