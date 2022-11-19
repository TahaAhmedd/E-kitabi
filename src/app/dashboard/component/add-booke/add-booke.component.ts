import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators ,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/books/book.service';
@Component({
  selector: 'app-add-booke',
  templateUrl: './add-booke.component.html',
  styleUrls: ['./add-booke.component.css']
})
export class AddBookeComponent implements OnInit {
  addBook!: FormGroup;
  imageSrc: any ;
  imagearr:any=[];
 private imageaObj:any= []

  constructor(private router:Router 
    ,private httServes:BookService
   ) {
    this.addBook = new FormGroup({
      bookName: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required,Validators.minLength(5)]),
      fileimages: new FormControl("", [Validators.required]),
      filebook: new FormControl("", [Validators.required]),
  })
   }
  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files;
  for (var i = 0; i < file.length; i++) {
    const reader = new FileReader();
    reader.onload = e => this.imagearr.push(e.target!.result);
    reader.readAsDataURL(file[i]);
    
    
  }
 
        
      }
  }
  ngOnInit(): void {
  }
  addBookData()
  {
   const data={ data:this.addBook.value}
    this.imageaObj.push(this.addBook.value.filebook)
    this.imageaObj.push(this.addBook.value.fileimages)
     const sendData=data.data
     
 this.httServes.postBook(sendData)
}

}
