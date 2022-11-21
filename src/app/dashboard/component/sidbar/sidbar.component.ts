import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  constructor(private Routes:Router
             ,private AuthServes:UserService ) { }

  ngOnInit(): void {
  }
 
  logout()
  {
    this.AuthServes.Logout();
    this.Routes.navigateByUrl('/user/login')

  }
}
