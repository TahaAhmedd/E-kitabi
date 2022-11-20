import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit {
  addartical!: FormGroup;

  get linkesControls() {
     return (<FormArray>this.addartical.get('links')).controls;
  }
  get keywordsControl() {
    return (<FormArray>this.addartical.get('keywords')).controls;
 }




  imageSrc: any ;
  imagearr:any=[];
  // Input:any[] = [{ zip: '' }]
  // addInput(){
  //   this.Input.push({
  //    zip:''
  //   });
  // }
  constructor(public fb:FormBuilder ,private router:Router,private serv:ArticlesService, private http:HttpClient) {
    this.addartical =  this.fb.group({
      categoryName: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required,Validators.minLength(5)]),
      links: new FormArray([]),
      text: new FormControl("", [Validators.required]),
      keywords: new FormArray([]),
      cover: new FormControl("", [Validators.required])
  })
   }

  ngOnInit(): void {
  }
  
AddArticle(){

  console.log(this.addartical.get('keywords').value)

  var formData: any = new FormData();
  formData.append('categoryName', this.addartical.get('categoryName').value);
  formData.append('title', this.addartical.get('title').value);
  formData.append('links', this.addartical.get('links').value);
  formData.append('text', this.addartical.get('text').value);
  formData.append('keywords', this.addartical.get('keywords').value);
  formData.append('cover', this.addartical.get('cover').value);
  this.http
    .post('http://localhost:4000/article/newarticle', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      
    });


}
// show images uploads
readURL(event:any) {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files;
for (var i = 0; i < file.length; i++) {
  const reader = new FileReader();
  reader.onload = e => this.imagearr.push(e.target!.result);
  reader.readAsDataURL(file[i]);
  
  
}
// console.log(this.imagearr);
      
    }
}





// Button On Add Input Use Add Links
onAddLinks() {
  const control = new FormControl(null, [Validators.required] );
  (<FormArray>this.addartical.get('links')).push(control)
}
// Button On Add keys Use Add keys
onAddKeys() {
  const control = new FormControl(null, [Validators.required] );
  (<FormArray>this.addartical.get('keywords')).push(control)
}

}
