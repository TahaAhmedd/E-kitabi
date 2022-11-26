import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { DataPagination } from 'src/app/Model/ApiResponse';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  data:any|[];
  CountPage:number 
  addartical!: FormGroup;
  // formsearch!:FormGroup
  imageSrc: Array<File> = [];
  imagearr: any = [];
  pagNum :number =1
  formsearch = new FormGroup({
    search: new FormControl(''),
  });
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
      this.formsearch
      .get('search')
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((item) => this.artService.searchBooke(item))
      )
      .subscribe((v) => {
        console.log(v.data.length);
       v?.data;
      });
    }
    
  ngOnInit(): void {
    this.getAllArt(this.pagNum)
  }

  getAllArt(pagNum :number){
    this.artService.getArticles(pagNum).subscribe((e)=> 
    { 
      console.log(e.data)
      this.data = e.data.paginatedData
      this.CountPage=e.data.noOfPages
      console.log(this.data);
      

    })
  }
  
  counter(i: number) {
    return new Array(i);
  }

  deleteArt(id : number){
    this.artService.deleteArt(id).subscribe({
      next: ()=>{
        this.toast.success("The Aricle Has Been Deleted Succesfuly")
        this.getAllArt(this.pagNum)
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
