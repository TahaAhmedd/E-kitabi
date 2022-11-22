import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addBook:FormGroup;
  imagearr: any = [];

  addcatArt:FormGroup;
  imagearrr: any = [];

  constructor(private router: Router
    ,private serve:CatigotyBookService ,
    private tost: ToastrService,
    private servee:ArticleCategoryService
    
  ) {

    // Books Cat
    this.addBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      categoryImage: new FormControl("", [Validators.required]),
    })



    // Articles Cat
    this.addcatArt = new FormGroup({
      titleArt: new FormControl("", [Validators.required]),
      categoryImageArt: new FormControl("", [Validators.required]),
    })
  }


  ///////////////////////////////////////////////





  ngOnInit(): void {}


  // Book readURL
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

  // Articles Cat readURLL
  readURLL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      this.addcatArt.patchValue({
        categoryImageArt:file
      })
      for (var i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearrr.push(e.target!.result);
        reader.readAsDataURL(files[i]);

      }
    }
  }



  // Submit Book Cat 
  addBookData() {
    // console.log(this.addBook.value)
    const formData = new FormData()
    formData.append("title",this.addBook.get("title").value)
    formData.append("categoryImage", this.addBook.get("categoryImage").value)
    this.serve.postBookCat(formData).subscribe({
      next:(value)=> {
        // console.log(value);
        this.tost.success("The Category of Books is Added Succesfuly","",{
          positionClass:"toast-bottom-right",
          progressBar:true,
        })
        this.router.navigateByUrl("/dashboard/Allcategorey")
      },
      error(err) {
        console.log(err)
      },
    })
  }



  // Submit Atricles Cat 
  addArtData() {
    console.log(this.addcatArt.value)
    const formData = new FormData()
    formData.append("title",this.addcatArt.get("titleArt").value)
    formData.append("categoryImage", this.addcatArt.get("categoryImageArt").value)
    this.servee.postCatArt(formData).subscribe({
      next:(value)=> {
        console.log(value);
        this.tost.success("The Category of Articles is Added Succesfuly","",{
          positionClass:"toast-bottom-right",
          progressBar:true,

        })
        this.router.navigateByUrl("/dashboard/Allcategorey")
      },
      error:(err)=> {
        // console.log(err)
        this.tost.error("An error occurred, please try again")
      },
    })
  }
}
