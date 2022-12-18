import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { ApiRespaginat, ApiResponse, DataBookResult } from 'src/app/Model/ApiResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  listBooke:DataBookResult [] ;
  AllBooke:  ApiRespaginat|any;
  curentCat: string;
  catogry :any
  pagNum=1
  CountPage:number
  formsearch: FormGroup = new FormGroup({
    title: new FormControl(''),
  });
  constructor(
     private ApiServes: BookService
   , private canActive: ActivatedRoute
   , private serBookCat :CatigotyBookService ,
     private toast :ToastrService
  ) {
   }

  ngOnInit(): void {
    window.scrollTo(0,0)
    //get CatName From Route
    this.canActive.paramMap.subscribe((pram) => {
      this.curentCat = pram.get('category');
      // console.log(this.curentCat)

      if (this.curentCat) {
       this.get(this.curentCat ,this.pagNum)
      }
    });
    this.serBookCat.getAllBookCat().subscribe((response) => {
      this.catogry = response.data
  })}
  get(current:string ,pagNum :number)
  
  {
    this.ApiServes.getBookByCatigory(current,pagNum).subscribe(
      (bookData) => {
        this.listBooke=bookData.data.paginatedData
        this.CountPage=bookData.data.noOfPages
        // console.log(this.listBooke);
        
        this.AllBooke = bookData.data.paginatedData
      }
    );
  }
  getdata(pagNum :number)
  {
    this.get(this.curentCat ,pagNum)
  }
  counter(i: number) {
    return new Array(i);
  }
  search(){
    if(this.formsearch.get("title").value == ""){
      return this.listBooke = this.AllBooke
    }
    else{
      this.ApiServes.searchBooke(this.formsearch.get("title").value).subscribe({
        next: (res)=>{
          // console.log(res)
          this.listBooke = res.data
          // console.log(res)
          if(res.status == 404){
            
          }
        },
        error: (err)=>{
          if(err.status == 404)
          {
            // console.log(err.status)
            this.toast.error("This Name Cannot be Searched","Error")
          }
        }
      })
    }
  }
}
