import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse, ApiResponse0, DataBookResult } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';
import { ChangeDetectionStrategy, ThisReceiver } from '@angular/compiler';
import { Meta, Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
// import 'rxjs/Rx' ;
@Component({
  selector: 'app-download-book',
  templateUrl: './download-book.component.html',
  styleUrls: ['./download-book.component.css'],
})
export class DownloadBookComponent implements OnInit {
  curentId: string;
  listBook: ApiResponse | any;
  listLinkouter:any
  listLinkInner:any
  pagNum=1;
  link:any;
  loading: boolean = false;
  
  dates: any
   datePipe = new DatePipe('en-US');
  value:any;
  links: any;

  relatedBook:any[]; //Array To related Books 
  keyword: any;

  constructor(
    private canActive: ActivatedRoute,
    private bookServes: BookService,
    private cd:ChangeDetectorRef,
    private metaTagService:Meta
    ) {

      // console.log(this.listBook);
    }
  

  ngOnInit(): void {
    //get id from Route
    // this.curentId

    this.canActive.paramMap.subscribe((pram) => {
      this.curentId = pram.get('id');

      if (this.curentId) {
        this.bookServes.getBookByID(this.curentId).subscribe((bookData) => {
          // console.log(bookData.data);
          
          this.listBook = bookData.data;
          this.dates=this.listBook._doc.createdAt
          this.keyword=this.listBook._doc.keywords
          // console.log(this.keyword);
          this.value = this.datePipe.transform(this.dates,'dd/MM/yyyy');
          this.metaTagService.updateTag(
            { name: 'date', content:`${this.keyword}` }
            )
            this.metaTagService.updateTag(
              { name: 'keywords', content:`${[...this.keyword]}` }
              );
            this.getBooksByCat(
              this.listBook._doc?.categoryName == ""? {"subCat":this.listBook._doc.subCategoryName} : this.listBook._doc?.categoryName
            ,this.pagNum) //Fetch Ctaegory Book Of Related Books Secthion
        });
      }
    });

  }
  
  setLoading(link:string) {
    this.loading = true;
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.loading = false;
      // window.open(link,"_blanck")
      this.downLoadBook()
    }, 1000);
    
  }
  downLoadBook(){
    // console.log(this.curentId);
    this.bookServes.getBookByID(this.curentId).subscribe(response=>{
      this.downloadFile(response)
      // console.log(response);
      this.listBook=response.data
    })
  }
  downloadFile(data:any) {
    this.links = data.data._doc.link
    // console.log(this.links);
    const blob = new Blob([this.links], { type: 'text/pdf' });
    // console.log(blob);
    window.open(this.links);
    // const url= window.URL.createObjectURL(blob);
    
    // console.log(url);
  }
 

  getBooksByCat(catName:any, pagNum:number){
    if(typeof catName == "object")
    {
      this.bookServes.getBookBySub(catName.subCat , 1).subscribe({
        next:(res)=>{
          this.relatedBook = res.data.paginatedData.slice(-3)
        }
      })

    }
    else{
      this.bookServes.getBookByCatigory(catName ,pagNum ).subscribe({
        next:(res)=>{
          this.relatedBook = res.data.paginatedData.slice(-3)
        }
      })
    }
  }
}
