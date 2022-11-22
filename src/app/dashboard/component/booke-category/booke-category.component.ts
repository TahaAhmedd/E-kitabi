import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';

@Component({
  selector: 'app-booke-category',
  templateUrl: './booke-category.component.html',
  styleUrls: ['./booke-category.component.css']
})
export class BookeCategoryComponent implements OnInit {
  bookCatData: any[]
  artCatData: any[]
  constructor(private bookCat : CatigotyBookService,
              private artCat : ArticleCategoryService,
              private toast : ToastrService
    ) { }

  ngOnInit(): void {
    this.getAllCatBook()
    this.getAllCatArt()
  }

  getAllCatBook(){
    this.bookCat.getAllBookCat().subscribe((e)=> this.bookCatData = e.data)
  }

  getAllCatArt(){
    this.artCat.gitAllCatArt().subscribe((e)=> this.artCatData = e.data)
  }

  deleteBookCat(id:any){
    this.bookCat.deleteCat(id).subscribe({
      next: ()=>{
        this.toast.success("The Gategory is Deleted Successfuly")
        this.getAllCatBook()
      },
      error:()=>{
        this.toast.error("An error occurred, please try again")
      }
    })
  }

  deleteCatArt(id:any){
    this.artCat.deleteCat(id).subscribe({
      next: ()=>{
        this.toast.success("The Gategory is Deleted Successfuly")
        this.getAllCatArt()
      },
      error:()=>{
        this.toast.error("An error occurred, please try again")
      }
    })
  }
}
