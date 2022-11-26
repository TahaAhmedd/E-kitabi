import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { BookService } from 'src/app/services/books/book.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  artData: any[];
  pagNum:number =1
  bookData: any[];
  bookLength: number
  artLength: number
  constructor(private router: Router,
              private artService: ArticlesService,
              private bookService :BookService,
              private toast: ToastrService
    ) {}

  ngOnInit(): void {
    this.getSomeArticle(this.pagNum)
    this.getSomeBook()
  }

  // Bookes
  GoToBook() {
    this.router.navigateByUrl('/dashboard/list');
  }
  
  getSomeBook(){
    this.bookService.getAll().subscribe((e)=>{
      this.bookLength = e.data.length
      this.bookData = e.data.slice(-4)
    })
  }

  deleteBook(id:any){
    this.bookService.deletBook(id).subscribe({
      next: ()=>{
        this.toast.success("The Book is Deleted Successfuly")
        this.getSomeBook()
      },
      error: ()=>{
        this.toast.error("An error occurred, please try again")
      }
    })
  }
  
  // Articels
  GoToArtical() {
    this.router.navigateByUrl('/dashboard/allartical');
  }
  
  getSomeArticle(pagnum:number){
    this.artService.getArticles(pagnum).subscribe((e)=>{
      this.artLength = e.data.paginatedData.length
      this.artData = e.data.paginatedData.slice(-4)
    })
  }

  deleteArt(id:any){
    this.artService.deleteArt(id).subscribe({
      next:()=>{
        this.toast.success("The Article is Deleted Successfuly")
        this.getSomeArticle(this.pagNum)
      },
      error: ()=>{
        this.toast.error("An error occurred, please try again")
      }
    })
  }
}
