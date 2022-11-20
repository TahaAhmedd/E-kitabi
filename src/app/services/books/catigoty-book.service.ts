import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatigotyBookService {

  constructor(private httb:HttpClient) { }

  getAllBookCat(){
    return this.httb.get(`${environment.PathApi}/bookcate/all`)
  }

  postBookCat(data :any){
    return this.httb.post(`${environment.PathApi}/bookcate/newcategory`,data)
  }
}
