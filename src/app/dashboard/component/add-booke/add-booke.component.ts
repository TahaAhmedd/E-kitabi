import { Component, OnInit,ViewChild, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/books/book.service';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';
@Component({
  selector: 'app-add-booke',
  templateUrl: './add-booke.component.html',
  styleUrls: ['./add-booke.component.css']
})
export class AddBookeComponent implements OnInit {
  @ViewChild('attachments') attachment: any;
  addBook!: FormGroup;
  imageSrc: any;
  imagearr: any = [];
  dataSelect:any[];
  dataCat=[{title:"Civil"},{title:"Architectural"},{title:"Mechanical"},{title:"Surveying"},{title:"Electrical"},{title:"Electronics"}]
  private imageaObj: any = []

  constructor(private router: Router
    , private httServes: BookService,
    private tost: ToastrService,
    private catService: CatigotyBookService
  ) {
    this.addBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      cover: new FormControl("", [Validators.required]),
      bookFile: new FormControl("", [Validators.required]),
      keywords: new FormArray([]),
      categoryName: new FormControl(""),
      subCategoryName: new FormControl(""),
      // fileSource: new FormControl(null),
      // imageSource: new FormControl(null),
      innerLinks: new FormArray([]),
      externalLinks: new FormArray([]),
    })
  }
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files;
      const file = event.target.files[0]
      this.addBook.patchValue({
        imageSource:file
      })
      for (var i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearr.push(e.target!.result);
        reader.readAsDataURL(files[i]);

      }
    }
  }
  deleteImage(index) {
   
    this.imagearr.splice(index, 1);
    // this.imageSrc.splice(index, 1);
    if (this.imagearr==0) {
      this.attachment.nativeElement.value = '';
    } else {
      
    }
  }
  fileChange(e: any){
    // console.log(e.target.files)
    if(e.target.files.length > 0){
      const file = e.target.files[0];
      this.addBook.patchValue({
        fileSource: file
      })
    }
  }
  ngOnInit(): void {
    this.allCatBook()
  }

  allCatBook(){
    this.catService.getAllBookCat().subscribe((e) => this.dataSelect = e.data)
  }

  addBookData() {
    console.log(this.addBook.value)
    const formData = new FormData()
    for(let i = 0; i < (<FormArray>this.addBook.get("externalLinks")).length ; i++ ){
      formData.append("outerLinks",JSON.stringify(this.addBook.get("externalLinks").value[i]))
    }
    for(let i = 0; i < (<FormArray>this.addBook.get("innerLinks")).length ; i++ ){
      formData.append("innerLinks", JSON.stringify(this.addBook.get("innerLinks").value[i]))
    }
    for(let i = 0; i < (<FormArray>this.addBook.get("keywords")).length ; i++ ){
      formData.append("keywords",this.addBook.get("keywords").value[i])
    }
    formData.append("title",this.addBook.get("title").value)
    formData.append("description", this.addBook.get("description").value)
    formData.append("categoryName",this.addBook.get("categoryName").value)
    formData.append("subCategoryName",this.addBook.get("subCategoryName").value)
    formData.append("bookFile",this.addBook.get("bookFile").value)
    formData.append("cover",this.addBook.get("cover").value)

    this.httServes.postBook(formData).subscribe({
      next:(value)=> {
        console.log(value)
        this.tost.success("The Book is Added Succesfuly","",{
          positionClass:"toast-bottom-right",
          progressBar:true,
          
        })
        this.router.navigateByUrl("/dashboard/list")
      },
      error:(err)=> {
        console.log(err)
        this.tost.error("An error occurred, please try again")
      },
    })
  }

  // Inner Linkes
  get innerlinkesControls() {
    return (<FormArray>this.addBook.get('innerLinks')).controls;
  }
  // Button On Add Input Use Add Links
  onAddLinks() {
    const control = new FormGroup({
      text:new FormControl('',Validators.required),
      link:new FormControl('',Validators.required)
    });
    (<FormArray>this.addBook.get('innerLinks')).push(control)
  }


  // External Linkes
  get externalLinkesControls() {
    return (<FormArray>this.addBook.get('externalLinks')).controls;
  }
   // Button On Add Input Use Add Links
   onInnerAddLinks() {
    const control = new FormGroup({
      text:new FormControl('',Validators.required),
      link:new FormControl('',Validators.required)
    });
    (<FormArray>this.addBook.get('externalLinks')).push(control)
  }


  // Key Words
  get keywordsControl() {
    return (<FormArray>this.addBook.get('keywords')).controls;
  }

  onAddKeys() {
    const control = new FormControl("", [Validators.required]);
    (<FormArray>this.addBook.get('keywords')).push(control)
  }
}
