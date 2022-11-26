import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
import { ApiResponse } from 'src/app/Model/ApiResponse';
import { observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler';
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
  constructor(
    private canActive: ActivatedRoute,
    private bookServes: BookService,
    private cd:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //get id from Route
    // this.curentId

    this.canActive.paramMap.subscribe((pram) => {
      this.curentId = pram.get('id');
      console.log(this.curentId);

      if (this.curentId) {
        this.bookServes.getBookByID(this.curentId).subscribe((bookData) => {
          this.listBook = bookData.data;
          console.log(bookData);
        });
      }
    });
    console.log(this.listBook);
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
    console.log(data.data.link);
    const blob = new Blob([data.link], { type: 'text/pdf' });
    console.log(blob);
    const url= window.URL.createObjectURL(data.data.link);
    console.log(url);
    window.open(url);
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
