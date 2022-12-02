import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';

@Component({
  selector: 'app-download-book',
  templateUrl: './download-book.component.html',
  styleUrls: ['./download-book.component.css'],
})
export class DownloadBookComponent implements OnInit {
  curentId: string;
  listBook: ApiResponse | any;
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
    if(this.curentId)
    {
      this.bookServes.getBookByID(this.curentId).subscribe(
        (bookData)=>
      {
      console.log(bookData.data);
 
      })
    }

  }
)}
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

