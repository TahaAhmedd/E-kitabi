import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';

@Component({
  selector: 'app-booke-category',
  templateUrl: './booke-category.component.html',
  styleUrls: ['./booke-category.component.css']
})
export class BookeCategoryComponent implements OnInit {
  [x: string]: any;
  bookCatData: any[]
  artCatData: any[]
  //
  upCatBook: FormGroup;
  imagearr: any = [];
  // 
  upCatArt: FormGroup;
  imagearrr: any = [];

  constructor(private bookCat: CatigotyBookService,
    private artCat: ArticleCategoryService,
    private toast: ToastrService
  ) {


    // upCatBook
    this.upCatBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      categoryImage: new FormControl("", [Validators.required]),
    });

    // upCatArt
    this.upCatArt = new FormGroup({
      titlee: new FormControl("", [Validators.required]),
      categoryImagee: new FormControl("", [Validators.required]),
    });

  };





  ngOnInit(): void {
    this.getAllCatBook()
    this.getAllCatArt()
  }

  // Book readURL
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      console.log(this.imagearr);
      console.log(file.name);
      console.log(files);

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearr.push(e.target!.result);
        reader.readAsDataURL(files[i]);

      }
      console.log(this.imagearr);
      this.upCatBook.patchValue({
        categoryImage: file
      })
    }
  }


  // Art readURL
  readURLL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      console.log(this.imagearrr);
      console.log(file.name);
      console.log(files);

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearrr.push(e.target!.result);
        reader.readAsDataURL(files[i]);

      }
      console.log(this.imagearrr);
      this.upCatArt.patchValue({
        categoryImagee: file
      })
    }
  }

  getAllCatBook() {
    this.bookCat.getAllBookCat().subscribe((e) => this.bookCatData = e.data)
  }

  getAllCatArt() {
    this.artCat.gitAllCatArt().subscribe((e) => this.artCatData = e.data)
  }

  deleteBookCat(id: any) {
    this.bookCat.deleteCat(id).subscribe({
      next: () => {
        this.toast.success("The Gategory is Deleted Successfuly")
        this.getAllCatBook()
      },
      error: () => {
        this.toast.error("An error occurred, please try again")
      }
    })
  }

  deleteCatArt(id: any) {
    this.artCat.deleteCat(id).subscribe({
      next: () => {
        this.toast.success("The Gategory is Deleted Successfuly")
        this.getAllCatArt()
      },
      error: () => {
        this.toast.error("An error occurred, please try again")
      }
    })
  }



  // Submit Book Cat 
  upCatB(id: any) {
    const formData = new FormData()
    formData.append("title", this.upCatBook.get("title").value)
    formData.append("cover", this.upCatBook.get("categoryImage").value)
    this.bookCat.postUpCat(id, formData).subscribe({
      next: (value) => {
        // console.log('Done');
        window.location.reload()
      },
      error(err) {
        console.log(err)
      },
    })
  }


  // Submit Art Cat 
  upCatA(id: any) {
    const formData = new FormData()
    formData.append("title", this.upCatArt.get("titlee").value)
    formData.append("cover", this.upCatArt.get("categoryImagee").value)
    this.artCat.postUpCatArt(id, formData).subscribe({
      next: (value) => {
        // console.log('Done');
        window.location.reload()
      },
      error(err) {
        console.log(err)
      },
    })
  }


}
