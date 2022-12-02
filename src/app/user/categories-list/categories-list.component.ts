import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
   listBooke :ApiResponse |any
     filterCatogry=localStorage.getItem("catogry")
  constructor(private ApiServes:BookService
             ,private router :Router ) { }

  ngOnInit(): void {
    this.ApiServes.getAll().subscribe((res)=>{
    this.listBooke=res.data
      
    })
  }
 

}
