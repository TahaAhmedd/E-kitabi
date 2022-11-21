import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleCategoryService {

  constructor(private httb : HttpClient) { }

  gitAllCatArt(){
    return this.httb.get(`${environment.PathApi}/articlecate/all`);
  }

  postCatArt(data :any){
    return this.httb.post(`${environment.PathApi}/articlecate/newcategory`,data)
  }

}
