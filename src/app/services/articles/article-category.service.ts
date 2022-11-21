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

  gitAllCatArt():Observable <ApiResponse> {
    return this.httb.get<ApiResponse>(`${environment.PathApi}/articlecate/all`);
  }

  postCatArt(data :any){
    return this.httb.post(`${environment.PathApi}/articlecate/newcategory`,data)
  }

}

