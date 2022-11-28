import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler';
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
  link:any={};
  loading: boolean = false;
  
  dates: any
   datePipe = new DatePipe('en-US');
  value:any;
  links: any;
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
      console.log(this.curentId);

      if (this.curentId) {
        this.bookServes.getBookByID(this.curentId).subscribe((bookData) => {
          this.listBook = bookData.data;
          this.dates=this.listBook.createdAt
          console.log(this.listBook);
          this.value = this.datePipe.transform(this.dates,'dd/MM/yyyy');
          this.metaTagService.updateTag(
            { name: 'date', content:`${this.value}` }
            );
        });
      }
    });
    
  }
  
  setLoading() {
    this.loading = true;
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.loading = false;
      this.downLoadBook()
    }, 3000);
    
  }
  downLoadBook(){
    console.log(this.curentId);
    this.bookServes.getBookByID(this.curentId).subscribe(response=>{
      this.downloadFile(response)
      
      
    })
  }
  downloadFile(data) {
    this.links = data.data.link
    console.log(this.links);
    const blob = new Blob([this.links], { type: 'text/pdf' });
    console.log(blob);
    window.open(this.links);
    // const url= window.URL.createObjectURL(blob);
    
    // console.log(url);
  }
  // getbookById(id:string) {
  //   this.bookServes.getBookByID(this.curentId).subscribe((res) => {
  //     this.listBook = res.data;
  //   });
  // }
  // async getbookById(id: string) {
  //   this.bookServes.getBookByID(this.curentId).subscribe((res)=>{

  //     this.listBook= res.data
  //   })
}
