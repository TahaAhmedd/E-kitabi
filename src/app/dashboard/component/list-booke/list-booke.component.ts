import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-list-booke',
  templateUrl: './list-booke.component.html',
  styleUrls: ['./list-booke.component.css']
})
export class ListBookeComponent implements OnInit {
   arrBook :any=[]
  constructor(private httpServes:BookService) { }

  ngOnInit(): void {
  this.arrBook=this.getdata()
  }
  getdata()
  {
   return  this.httpServes.getAllBooks()
    // console.log(this.arrBook);
    
  }
}
