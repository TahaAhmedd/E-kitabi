import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.css']
})
export class AddNewAdminComponent implements OnInit{
  editForm!:FormGroup
   id: any=localStorage.getItem('id');
       
   
constructor(private userServis:UserService
           ,private toster: ToastrService
           ,private router :Router){}



ngOnInit():void
{
 this.initForm()

}
ngOnChanges()
{
  this.initForm()
}
initForm()
{
  
  this.editForm= new FormGroup({
   userName:  new FormControl('',[Validators.required])
   ,email: new FormControl('' ,[Validators.required ,Validators.email])
   ,password: new FormControl('',[Validators.required ])
  })
}

editAccount()
{
   this.userServis.update(this.id, this.editForm.value).subscribe({
    next:(value)=> {
      this.toster.success("The Account  is update Succesfuly","",{
        positionClass:"toast-top-right",
        progressBar:true,
      })
     
    },
    error:(err) =>{
    
    },
  complete:()=>{
   setTimeout(()=>{ this.router.navigate(['/login'])},2000)
  }   })
}

}
