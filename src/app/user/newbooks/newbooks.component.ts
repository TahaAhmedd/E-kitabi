import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-newbooks',
  templateUrl: './newbooks.component.html',
  styleUrls: ['./newbooks.component.css']
})
export class NewbooksComponent implements OnInit {
  bookData: any[];
  constructor(private bookServ: BookService) { }

  ngOnInit(): void {
    this.getAll()
    window.scrollTo(0,0)
  }

  getAll(){
    this.bookServ.getAll().subscribe((e)=>{
      this.bookData = e.data.slice(-4)
    })
  }
}
