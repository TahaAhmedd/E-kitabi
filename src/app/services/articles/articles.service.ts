import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }


  // Function Get From Api 
  getArticles():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.PathApi}/article/all`);
  }


  // Add New Articels 
  addArticles(form: FormData) {
    return this.http.post(`${environment.PathApi}/article/newarticle`, form)

  }

  deleteArt(id:number){
    return this.http.delete(`${environment.PathApi}/article/delete/${id}`)
  }

  getByCatNAme(name:string){
    return this.http.get(`${environment.PathApi}/article/articles/${name}`)
  }

  updateArt(id:number , data:any){
    return this.http.put(`${environment.PathApi}/article/update/${id}`,data)
  }
}
