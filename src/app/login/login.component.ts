import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup
  constructor() { 
    this.loginForm = new FormGroup({
      Email : new FormControl("",[Validators.required,Validators.email]) ,
      Password : new FormControl("",[Validators.required]) 
  }) 
  }

  ngOnInit(): void {
  }
  add(){
    // let email =  this.loginForm.controls['email'].value;
    // let password =  this.loginForm.controls['password'].value;
    // let user = this.loginForm.value;
    // console.log(user)
    // this.user.getUser(user).subscribe((data)=>{
    //   console.log(data)
    }
  }

// }
