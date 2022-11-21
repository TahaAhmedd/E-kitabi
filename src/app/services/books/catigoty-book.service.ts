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
}
