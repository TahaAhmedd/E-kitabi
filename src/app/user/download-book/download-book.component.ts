import { AfterViewInit, ChangeDetectorRef, Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse, ApiResponse0, DataBookResult } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';
import { ChangeDetectionStrategy, ThisReceiver } from '@angular/compiler';
import { Meta, Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
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
    private metaTagService:Meta,
    private toast:ToastrService
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
          console.log(bookData.data);
          
          this.listBook = bookData.data;
          this.dates=this.listBook._doc.createdAt
          this.keyword=this.listBook._doc.keywords
          // console.log(this.keyword);
          this.value = this.datePipe.transform(this.dates,'dd/MM/yyyy');
          this.metaTagService.updateTag(
            { name: 'date', content:`${this.value}` }
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
  downloadBtnfun() {
   var timeLeft= 20;
    (document.querySelector('.download-btn') as HTMLElement).style.display = "none";
    document.querySelector('.countdown').innerHTML = `<div class='loadcontainer' ><div class='loading'  style="border: 1px solid #4a90e2; padding: 8px; border-radius: 3px; color: rgba(55, 57, 76, .3);">Please wait <span style=" color: #0693f6; font-size: 1.5em; font-weight: 800;">${timeLeft}</span> seconds. </div> </div> <br/>`;
    (document.querySelector('.countdown') as HTMLElement).style.display = "block";
    var downloadTimer = setInterval(function timeCount(){
      // console.log(timeLeft)

      timeLeft -= 1;
      // console.log(timeLeft)
      document.querySelector('.countdown').innerHTML = `<div class='loadcontainer'><div class='loading'  style="border: 1px solid #4a90e2; padding: 8px; border-radius: 3px; color: rgba(55, 57, 76, .3); ">Please wait <span style=" color: #0693f6; font-size: 1.5em; font-weight: 800;">${timeLeft}</span> seconds.</div></div><br/>`;

      if(timeLeft <= 0){
        clearInterval(downloadTimer);
        (document.querySelector('.pleaseWait-text') as HTMLElement).style.display = "block";
        (document.querySelector('.countdown')as HTMLElement).style.display = "none";
        setTimeout(() => {
          (document.querySelector('.countdown')as HTMLElement).style.display = "none";
          (document.querySelector('.pleaseWait-text') as HTMLElement).style.display = "none";
          (document.querySelector('.manualDownload-text') as HTMLElement).style.display = "block";
        }, 4000);
      }
    }, 1000);
  };
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
    this.bookServes.getBookByID(this.curentId).subscribe({
      next:(response)=>{
        // console.log(response)
      this.downloadFile(response)
      // console.log(response);
      this.listBook=response.data
    },
    error: (response)=>{
      // console.log(response)
      if(response.status == 404)
      {
        // console.log(err.status)
        this.toast.error("This book not found","Error")
      }
    }
  })
  }
  downloadFile(data:any) {
    
    this.links = data.data._doc.link
    // console.log(this.links);
    const blob = new Blob([this.links], { type: 'text/pdf' });
    // console.log(blob);
    window.open(this.links);
    // const url= window.URL.createObjectURL(blob);
    // console.log(this.links.response)
    // if(this.links.status == 404)
    // {
    //   // console.log(err.status)
    //   this.toast.error("This book not found","Error")
    // }
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
