import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit {
  @ViewChild('attachments') attachment: any;
  addartical!: FormGroup;
  imageSrc: Array<File> = [];
  imagearr: any = [];
  dataSelect:any[]= []
  constructor(
    public fb: FormBuilder, 
    private router: Router, 
    private artService: ArticlesService, 
    private http: HttpClient,
    private toast: ToastrService ,
    private catArt:ArticleCategoryService
    )
    {
    this.addartical = this.fb.group({
      categoryName: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      links: new FormArray([]),
      innerLinks: new FormArray([]),
      text: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      keywords: new FormArray([]),
      cover: new FormControl("", [Validators.required]),
      imageSource: new FormControl([]),
    })
  }

  ngOnInit(): void {
    this.allCat()
  }

  allCat(){
    this.catArt.gitAllCatArt().subscribe((e)=> this.dataSelect = e.data)
  }
  // show images uploads
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files;
      for (var i = 0; i < file.length; i++) {
        const reader = new FileReader();
        reader.onload = e => this.imagearr.push(e.target!.result);
        reader.readAsDataURL(file[i]);
        const files = file[i]
        this.imageSrc.push(event.target.files[i])
      }
      // console.log(this.imagearr)
      
    }
  }

  AddArticle() {

    var formData = new FormData();
    for(let i = 0 ; i< this.imageSrc.length ; i++){
      formData.append("articleImages",this.imageSrc[i], this.imageSrc[i].name)
    }
    
    console.log(this.addartical.value)
    formData.append('categoryName', this.addartical.get('categoryName').value);
    formData.append('title', this.addartical.get('title').value);
    formData.append('links', JSON.stringify(this.addartical.get('links').value));
    formData.append('innerLinks', JSON.stringify(this.addartical.get('innerLinks').value));
    formData.append('text', this.addartical.get('text').value);
    formData.append('description', this.addartical.get('description').value);
    formData.append('keywords', this.addartical.get('keywords').value);

    this.artService.addArticles(formData).subscribe({
      next : ()=>{
        this.toast.success("The Article is Aded Succesfuly")
        this.addartical.reset()
        this.router.navigateByUrl("/dashboard/allartical")
      },
      error:(err)=> {
        this.toast.error("An error occurred, please try again")        
      },
    })
  }
  deleteImage(index) {
   
    this.imagearr.splice(index, 1);
    this.imageSrc.splice(index, 1);
    if (this.imagearr==0) {
      this.attachment.nativeElement.value = '';
    } else {
      
    }
  }



  get linkesControls() {
    return (<FormArray>this.addartical.get('links')).controls;
  }
  get innerLinkesControls() {
    return (<FormArray>this.addartical.get('innerLinks')).controls;
  }
  get keywordsControl() {
    return (<FormArray>this.addartical.get('keywords')).controls;
  }
  // Button On Add Input Use Add Links
  onAddLinks() {
    const control = new FormGroup({
      text:new FormControl('',Validators.required),
      link:new FormControl('',Validators.required)
    });
    (<FormArray>this.addartical.get('links')).push(control)
  }
    // Button On Add Input Use Add Links
    onInnerAddLinks() {
      const control = new FormGroup({
        text:new FormControl('',Validators.required),
        link:new FormControl('',Validators.required)
      });
      (<FormArray>this.addartical.get('innerLinks')).push(control)
    }
  // Button On Add keys Use Add keys
  onAddKeys() {
    const control = new FormControl("", [Validators.required]);
    (<FormArray>this.addartical.get('keywords')).push(control)
  }

}
