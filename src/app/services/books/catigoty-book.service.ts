import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatigotyBookService {

  constructor(private httb:HttpClient) { }

  getAllBookCat() :Observable<ApiResponse> {
    return this.httb.get<ApiResponse>(`${environment.PathApi}/bookcate/all`)
  }

  postBookCat(data :any){
    return this.httb.post(`${environment.PathApi}/bookcate/newcategory`,data)
  }

  deleteCat(id:any){
    return this.httb.delete(`${environment.PathApi}/bookcate/delete/${id}`)
  }


  // Up Catogery Category Book
  postUpCat(id:any, data:any){
    // console.log("From Ser "+id, data)
    return this.httb.put(`${environment.PathApi}/bookcate/update/${id}`,data)
  }


}
