import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-somebook',
  templateUrl: './somebook.component.html',
  styleUrls: ['./somebook.component.css']
})
export class SomebookComponent implements OnInit {
  books = [];
  constructor(private bookServ:BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.bookServ.getAll().subscribe((e)=> {
      // console.log(e)
      this.books = e.data.slice(0,4)})
  }
}
