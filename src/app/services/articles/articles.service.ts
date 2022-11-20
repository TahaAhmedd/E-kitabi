import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {




  // Add New Articels 
  addArticles(test:any){
    console.log(test)
    return this.http.post("http://localhost:4000/article/newarticle", test)
    
  }


  /////////////////////////////////////////////////////////////// 

  // Add Linke Inside String
  // private url = "localhost:4000/Book";
  private url = "http://localhost:4000/article/all";


  // import HttpClient 
  constructor(private http:HttpClient) { }


  // Function Get From Api 
  getArticles() {
    return this.http.get(this.url);
  }





  

}
