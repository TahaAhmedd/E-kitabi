import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit {
  addartical!: FormGroup;
  imageSrc: any ;
  imagearr:any=[];
  Input:any[] = [{ zip: '' }]
  addInput(){
    this.Input.push({
     zip:''
    });
  }
  constructor(private router:Router) {
    this.addartical = new FormGroup({
      category: new FormControl("", [Validators.required]),
      articlename: new FormControl("", [Validators.required,Validators.minLength(5)]),
      linkarticle: new FormControl("", [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]),
      description: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required]),
      // zip: new FormControl("", [Validators.required]),
  })
   }

  ngOnInit(): void {
  }
  
AddArticle(){
  
    this.router.navigateByUrl('articles/details');
  
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
}
