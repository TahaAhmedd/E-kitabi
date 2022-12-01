import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.css']
})
export class AddNewAdminComponent implements OnInit{
  editForm!:FormGroup
   id: any=localStorage.getItem('id');
       
   
constructor(private userServis:UserService){}



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
  console.log("hell");
  
  // this.initForm()
   this.userServis.update(this.id, this.editForm.value).subscribe(()=>{console.log('succsess');
   })
}

}
