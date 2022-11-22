import { Component, OnInit,ViewChild, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  private imageaObj: any = []

  constructor(private router: Router
    , private httServes: BookService,
    private tost: ToastrService,
    private catService: CatigotyBookService
  ) {
    this.addBook = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      bookImage: new FormControl("", [Validators.required]),
      bookFile: new FormControl("", [Validators.required]),
      keywords: new FormControl("", [Validators.required]),
      categoryName: new FormControl("", [Validators.required]),
      fileSource: new FormControl(null),
      imageSource: new FormControl(null)
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
    formData.append("title",this.addBook.get("title").value)
    formData.append("description", this.addBook.get("description").value)
    formData.append("categoryName",this.addBook.get("categoryName").value)
    formData.append("keywords","")
    formData.append("bookFile",this.addBook.get("fileSource").value)
    formData.append("bookImage",this.addBook.get("imageSource").value)

    this.httServes.postBook(formData).subscribe({
      next:(value)=> {
        this.tost.success("The Book is Added Succesfuly","",{
          positionClass:"toast-bottom-right",
          progressBar:true,
          
        })
        this.router.navigateByUrl("/dashboard/list")
        // location.reload()
      },
      error(err) {
        console.log(err)
      },
    })
  }

}
