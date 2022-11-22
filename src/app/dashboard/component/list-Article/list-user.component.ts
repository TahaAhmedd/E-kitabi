import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  data:any[];
  addartical!: FormGroup;
  imageSrc: Array<File> = [];
  imagearr: any = [];
  dataSelect:any[]= []
  constructor( private artService:ArticlesService,
               private toast: ToastrService,
               public fb: FormBuilder, 
               private router : Router
    ) { 
      this.addartical = this.fb.group({
        categoryName: new FormControl("", [Validators.required]),
        title: new FormControl("", [Validators.required]),
        links: new FormArray([]),
        text: new FormControl("", [Validators.required]),
        keywords: new FormArray([]),
        cover: new FormControl("", [Validators.required]),
        imageSource: new FormControl([]),
      })
    }

  ngOnInit(): void {
    this.getAllArt()
  }

  getAllArt(){
    this.artService.getArticles().subscribe((e)=> 
    { 
      console.log(e.data)
      this.data = e.data
    })
  }

  deleteArt(id : number){
    this.artService.deleteArt(id).subscribe({
      next: ()=>{
        this.toast.success("The Aricle Has Been Deleted Succesfuly")
        this.getAllArt()
      },
      error: ()=>{
        this.toast.error("An error occurred, please try again")
      }
    })
  }


  updateArt(id:number){
    var formData = new FormData();
    for(let i = 0 ; i< this.imageSrc.length ; i++){
      formData.append("articleImages",this.imageSrc[i], this.imageSrc[i].name)
    }
    
    console.log(this.addartical.value)
    formData.append('categoryName', this.addartical.get('categoryName').value);
    formData.append('title', this.addartical.get('title').value);
    formData.append('links', this.addartical.get('links').value);
    formData.append('text', this.addartical.get('text').value);
    formData.append('keywords', this.addartical.get('keywords').value);

    this.artService.updateArt(id,formData).subscribe({
      next : ()=>{
        this.toast.success("The Article is Updated Succesfuly")
        this.addartical.reset()
        location.reload()
      },
      error:(err)=> {
        this.toast.error("An error occurred, please try again")        
      },
    })
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
      console.log(this.imageSrc)

    }
  }

  get linkesControls() {
    return (<FormArray>this.addartical.get('links')).controls;
  }
  get keywordsControl() {
    return (<FormArray>this.addartical.get('keywords')).controls;
  }
  // Button On Add Input Use Add Links
  onAddLinks() {
    const control = new FormControl("", [Validators.required]);
    (<FormArray>this.addartical.get('links')).push(control)
  }
  // Button On Add keys Use Add keys
  onAddKeys() {
    const control = new FormControl("", [Validators.required]);
    (<FormArray>this.addartical.get('keywords')).push(control)
  }
}
