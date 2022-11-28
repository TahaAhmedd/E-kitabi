import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse, ApiResponse0, DataBookResult } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { json } from 'express';
import { LoginComponent } from './../../login/login.component';

@Component({
  selector: 'app-download-book',
  templateUrl: './download-book.component.html',
  styleUrls: ['./download-book.component.css'],
})
export class DownloadBookComponent implements OnInit {
  curentId: string;
  listBook : ApiResponse0  |any
  loading:boolean = false
  listOuterLinke:[{}]
  constructor(
    private canActive: ActivatedRoute,
    private bookServes: BookService
  ) {}

  ngOnInit(): void {
    //get id from Route
    // this.curentId
    this.canActive.paramMap.subscribe(
      (pram) => {
  this.curentId=pram.get('id')
  console.log(this.curentId);
  
    if(this.curentId)
    {
      this.bookServes.getBookByID(this.curentId)
     .subscribe(
        (bookData)=>
      {
        console.log(bookData);
        
      this.listBook= bookData.data
      
      
       
      
        // console.log(this.listBook.data.forEach(el=>{console.log();
        // }));
        
      
 
      })
    }

  }
)}


setLoading(){
  this.loading = true
  window.scrollTo(0,0)
  setTimeout(() => {
    this.loading = false
  }, 3000);
}
    // getbookById(id:string) {
    //   this.bookServes.getBookByID(this.curentId).subscribe((res) => {
    //     this.listBook = res.data;
    //   });
    // }
  // async getbookById(id: string) {
  //   this.bookServes.getBookByID(this.curentId).subscribe((res)=>{
     
  //     this.listBook= res.data
  //   })
    
  }

