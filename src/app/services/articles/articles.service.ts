import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiRespaginat } from 'src/app/Model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }


  // Function Get From Api 
  getArticles(pagNum :Number):Observable<ApiRespaginat> {
    return this.http.get<ApiRespaginat>(`${environment.PathApi}/article/paginate/${pagNum}`);
  }


  // Add New Articels 
  addArticles(form: FormData) {
    return this.http.post(`${environment.PathApi}/article/newarticle`, form)

  }
 //Function Search about Book
 searchBooke(search: string):Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${environment.PathApi}/book/search/${search}`);
}

// Search About Article
 searchArticle(search: string):Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${environment.PathApi}/article/search/${search}`);
}
///delet
  deleteArt(id:number){
    return this.http.delete(`${environment.PathApi}/article/delete/${id}`)
  }

  
  // Get The Catogery With CatogeryName 
  getWithCatName(title:string) :Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/article/articles/${title}`)
  }

  // updateArt With Id 
  updateArt(id:number , data:any){
    return this.http.put(`${environment.PathApi}/article/update/${id}`,data)
  }


  // Get One Art With Id 
  getArtWithId(id:any) :Observable<ApiResponse> {
      return this.http.get<ApiResponse>(`${environment.PathApi}/article/getbyid/${id}`)
  }
}
