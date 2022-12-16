import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../Model/ApiResponse';
import { BookService } from '../services/books/book.service';
import { CatigotyBookService } from '../services/books/catigoty-book.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-get-book-by-sub-cat',
  templateUrl: './get-book-by-sub-cat.component.html',
  styleUrls: ['./get-book-by-sub-cat.component.css']
})
export class GetBookBySubCatComponent implements OnInit{
  constructor(private toast:ToastrService
             ,private ApiServes: BookService
             , private canActive: ActivatedRoute
             , private serBookCat :CatigotyBookService )
  {

  }
  listBooke:any[] =[];
  CountPage:any
  pagNum :any
  AllBooke: ApiResponse | any;
  curentCat: string;
  catogry :any
  formsearch: FormGroup = new FormGroup({
    title: new FormControl(''),
  });
  ngOnInit(): void {
    window.scrollTo(0,0)
    //get CatName From Route
    this.canActive.paramMap.subscribe((pram) => {
      this.curentCat = pram.get('category');
      console.log(this.curentCat)

      if (this.curentCat) {
   this.getBook(this.curentCat,this.pagNum)
      }
    });
    this.serBookCat.getAllBookCat().subscribe((response) => {
      this.catogry = response.data
  })}
  getBook(curcat:string ,pagNum:number)
  {
    this.ApiServes.getBookBySub(this.curentCat,pagNum).subscribe(
      (bookData) => {
        this.listBooke=bookData.data.paginatedData
        this.AllBooke = bookData.data.paginatedData
        this.CountPage=bookData.data.noOfPages
        this.pagNum=bookData.data.pageNumber
      }
    );
  }
  getdata(pagNum:number){
this.getBook(this.curentCat ,pagNum)
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
          console.log(res)
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
