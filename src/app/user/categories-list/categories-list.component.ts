import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  listBooke: ApiResponse | any;
  curentCat: string;
  catogry :any
  formsearch: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  constructor(
     private ApiServes: BookService
   , private canActive: ActivatedRoute
   , private serBookCat :CatigotyBookService
  ) {
    this.formsearch

    .get('search')
    .valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((item) => this.ApiServes.searchBooke(item))
    )
    .subscribe((v) => {
      console.log(v.data);
      this.listBooke = v?.data;
    });
  }

  ngOnInit(): void {
    //get CatName From Route
    this.canActive.paramMap.subscribe((pram) => {
      this.curentCat = pram.get('category');
      console.log(this.curentCat);

      if (this.curentCat) {
        this.ApiServes.getBookByCatigory(this.curentCat).subscribe(
          (bookData) => {
            this.listBooke=bookData.data
            
          }
        );
      }
    });
    this.serBookCat.getAllBookCat().subscribe((response) => {
      this.catogry = response.data
      // console.log(this.catogry)
  })}
}
