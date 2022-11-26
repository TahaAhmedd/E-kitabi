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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private Authserver: UserService
             ,private router:Router  ) {}
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
          let token=result.token
          let id =result.data._id
          localStorage.setItem('id', id)
          localStorage.setItem('token', token )   
          this.router.navigate(['dashboard/card']) 
              
        },
        error:(err)=>{
          console.log(err)
          alert("the Email or Password valid!! ")
        
        },

      });
    }
  }
}
