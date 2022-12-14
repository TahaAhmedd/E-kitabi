import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleCategoryService {

  constructor(private httb : HttpClient) { }

  gitAllCatArt():Observable<ApiResponse>{
    return this.httb.get<ApiResponse>(`${environment.PathApi}/articlecate/all`);
  }

  postCatArt(data :any){
    return this.httb.post(`${environment.PathApi}/articlecate/newcategory`,data);
  }

  deleteCat(id:any){
    return this.httb.delete(`${environment.PathApi}/articlecate/delete/${id}`);
  }

    // Up Catogery Category Art
    postUpCatArt(id:any, data:any){
      console.log("From Ser "+id, data)
      return this.httb.put(`${environment.PathApi}/articlecate/update/${id}`,data)
    }

}

