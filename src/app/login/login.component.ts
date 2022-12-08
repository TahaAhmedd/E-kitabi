import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  token:any
  constructor(private Authserver: UserService
             ,private router:Router ,
             private toast : ToastrService ) {}
  ngOnInit(): void {
    this.iniForm();
  }
  iniForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    localStorage.clear()
  }
  add() {

    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.Authserver.login(this.loginForm.value).subscribe({
        next: (result) => {
          console.log(result);        
          this.token=result.data.token
          let id =result.data._id
          localStorage.setItem('id', id)
          localStorage.setItem('token', this.token )   
        },
        error:(err)=>{
          console.log(err)
          this.toast.error("The Email Or Password Is Not Valid","Error")
        
        },
        complete:()=>{
          let token =  localStorage.getItem("token")
          if(token == this.token){
            this.router.navigate(['dashboard/card'])
          }
          else{
            this.toast.error("You Must Be Enter A valid Mail","Authentication Error")
          }
        }

      });
    }
  }
}
