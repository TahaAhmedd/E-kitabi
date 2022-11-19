import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles/articles.service';
@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit {
  addartical!: FormGroup;
  imageSrc: any ;
  imagearr:any=[];
  constructor(private router:Router,private serv:ArticlesService) {
    this.addartical = new FormGroup({
      categoryName: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required,Validators.minLength(5)]),
      links: new FormControl("", [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]),
      text: new FormControl("", [Validators.required]),
      keywords: new FormControl("", [Validators.required]),
      cover: new FormControl("", [Validators.required])
  })
   }

  ngOnInit(): void {
  }
  
AddArticle(){
  
    // this.router.navigateByUrl('articles/details');
    // console.log(this.addartical.value)



    this.serv.addArticles(this.addartical.value).subscribe((d) => {

      console.log(d)
    })
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
