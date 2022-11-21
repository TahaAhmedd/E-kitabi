import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addBook:FormGroup;
  imagearr: any = [];
  constructor(private router: Router
    ,private serve:CatigotyBookService ,
    private tost: ToastrService
  ) {
    this.addBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      categoryImage: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }


  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      this.addBook.patchValue({
        categoryImage:file
      })
      for (var i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearr.push(e.target!.result);
        reader.readAsDataURL(files[i]);

      }
    }
  }

  addBookData() {
    console.log(this.addBook.value)
    const formData = new FormData()
    formData.append("title",this.addBook.get("title").value)
    formData.append("categoryImage", this.addBook.get("categoryImage").value)


    this.serve.postBookCat(formData).subscribe({
      next:(value)=> {
        console.log(value);
        this.tost.success("The Book is Added Succesfuly","",{
          positionClass:"toast-bottom-right",
          progressBar:true,
          
        })
        // location.reload()
      },
      error(err) {
        console.log(err)
      },
    })
  }
}
