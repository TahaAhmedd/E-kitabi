import { getLocaleDateFormat } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataBookResult } from 'src/app/Model/ApiResponse';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-list-booke',
  templateUrl: './list-booke.component.html',
  styleUrls: ['./list-booke.component.css']
})
export class ListBookeComponent implements OnInit, OnChanges {
  arrBook: DataBookResult[]
  addBook!: FormGroup;
  imagearr: any = [];
  constructor(private httpServes: BookService, private toast: ToastrService) {
    this.addBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      bookImage: new FormControl("", [Validators.required]),
      bookFile: new FormControl("", [Validators.required]),
      keywords: new FormControl("", [Validators.required]),
      categoryName: new FormControl("test", [Validators.required]),
      fileSource: new FormControl(null),
      imageSource: new FormControl(null)
    })
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.getdata()
  }
  getdata() {
    return this.httpServes.getAll().subscribe((e) => {
      this.arrBook = e.data
    })
  }
  deletBook(id: number) {
    this.httpServes.deletBook(id).subscribe({
      next: () => {
        // this.tostSucces("The Book is Deleted Succesfuly")
        this.toast.success("The Book is Deleted Succesfuly")
        this.getdata()
      },
      error:(err)=> {
        this.toast.error("An error occurred, please try again")
      },
    })
  }

  // image On Change
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      this.addBook.patchValue({
        imageSource: file
      })
      for (var i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearr.push(e.target!.result);
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
        fileSource: file
      })
    }
  }

  updateBook(id: number) {
    const formData = new FormData()
    formData.append("title", this.addBook.get("title").value)
    formData.append("description", this.addBook.get("description").value)
    formData.append("categoryName", "test")
    formData.append("keywords", "")
    formData.append("bookFile", this.addBook.get("fileSource").value)
    formData.append("bookImage", this.addBook.get("imageSource").value)
    this.httpServes.editBook(id, formData).subscribe({
      next: (value) => {
        // console.log(value)
        this.toast.success("The Book is Deleted Succesfuly")
        this.getdata()
      },
      error:(err)=> {
        this.toast.error("An error occurred, please try again")
      },
    })
  }

  searchBook() {
    
  }
}
