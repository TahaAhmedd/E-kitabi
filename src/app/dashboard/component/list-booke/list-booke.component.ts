import { getLocaleDateFormat } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  Observable,
} from 'rxjs';
import { DataBookResult, DataPagination } from 'src/app/Model/ApiResponse';
import { BookService } from 'src/app/services/books/book.service';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';
// import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-list-booke',
  templateUrl: './list-booke.component.html',
  styleUrls: ['./list-booke.component.css'],
})
export class ListBookeComponent implements OnInit, OnChanges {
  arrBook: DataBookResult[];
  arrBook2: DataPagination[];
  pageNum: number = 1;
  noOfPages: number = 1;
  CountPage: number
  //search
  formsearch: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  addBook!: FormGroup;
  imagearr: any = [];
  dataSelect: any[];
  dataBook: DataBookUpdate;
  constructor(
    private httpServes: BookService,
    private toast: ToastrService,
    private catService: CatigotyBookService
  ) {
    this.addBook = new FormGroup({
      title: new FormControl(this.dataBook?.title, [Validators.required]),
      description: new FormControl(this.dataBook?.description, [
        Validators.required,
      ]),
      bookImage: new FormControl('', [Validators.required]),
      bookFile: new FormControl('', [Validators.required]),
      keywords: new FormControl(this.dataBook?.keywords, [Validators.required]),
      categoryName: new FormControl(this.dataBook?.categoryName, [
        Validators.required,
      ]),
      fileSource: new FormControl(null),
      imageSource: new FormControl(null),
    });

    //search

    // this.formsearch
    //   .get('search')
    //   .valueChanges.pipe(
    //     debounceTime(1000),
    //     distinctUntilChanged(),
    //     switchMap((item) => this.httpServes.searchBooke(item))
    //   )
    //   .subscribe((v) => {
    //     console.log(v.data);
    //     v.status;
    //     this.arrBook = v?.data;
    //   });
  }
  ngOnChanges(): void { }

  ngOnInit(): void {
    this.allCatBook();
    this.getdata(this.noOfPages);
  }
  getdata(pageNum: Number) {
    return this.httpServes.getWithPagination(pageNum).subscribe((e) => {
      this.arrBook = e.data.paginatedData;
      pageNum = e.data.pageNumber;
      this.CountPage = e.data.noOfPages
    });
  }

  /////
  counter(i: number) {
    return new Array(i);
  }
  ///
  deletBook(id: any) {
    this.httpServes.deletBook(id).subscribe({
      next: () => {
        // this.tostSucces("The Book is Deleted Succesfuly")
        this.toast.success('The Book is Deleted Succesfuly');
        this.getdata(this.pageNum);
      },
      error: (err) => {
        this.toast.error('An error occurred, please try again');
      },
    });
  }

  // image On Change
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0];
      this.addBook.patchValue({
        imageSource: file,
      });
      for (var i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => this.imagearr.push(e.target!.result);
        reader.readAsDataURL(files[i]);
      }
    }
  }
  // file On Change
  fileChange(e: any) {
    // console.log(e.target.files)
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.addBook.patchValue({
        fileSource: file,
      });
    }
  }

  allCatBook() {
    this.catService
      .getAllBookCat()
      .subscribe((e) => (this.dataSelect = e.data));
  }

  getBookById(id: any) {
    this.httpServes.getBookByID(id).subscribe((res) => {
      this.dataBook = Object.assign(res.data);
      // console.log(this.dataBook._doc);
      
    });
  }
  updateBook(id: number) {
    const formData = new FormData();
    formData.append('title', this.addBook.get('title').value);
    formData.append('description', this.addBook.get('description').value);
    formData.append('categoryName', this.addBook.get('categoryName').value);
    formData.append('keywords', this.addBook.get('keywords').value);
    formData.append('bookFile', this.addBook.get('fileSource').value);
    formData.append('bookImage', this.addBook.get('imageSource').value);
    this.httpServes.editBook(id, formData).subscribe({
      next: (value) => {
        // console.log(value)
        this.toast.success('The Book is update Succesfuly');
        this.getdata(this.pageNum);
      },
      error: (err) => {
        this.toast.error('An error occurred, please try again');
      },
    });
  }
  //////////////search ///////////////



  search() {
    if (this.formsearch.get("title").value == "") {
      this.getdata(this.noOfPages)
    }
    else {
      this.httpServes.searchBooke(this.formsearch.get("title").value).subscribe({
        next: (res) => {
          // console.log(res)
          this.arrBook = res.data
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}


export class DataBookUpdate {
  title: string 
  _doc:DataBookResult
  description: string = '';
  _id: string = '';
  keywords: [] = [];
  link: string = '';
  cover: string = '';
  createdAt: string = '';
  categoryName: string = '';
  updatedAt: string = '';
}
