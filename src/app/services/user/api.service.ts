import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httb:HttpClient) { }

  getAllData(){
    return this.httb.get("https://www.googleapis.com/books/v1/volumes?q=")
  }
}
