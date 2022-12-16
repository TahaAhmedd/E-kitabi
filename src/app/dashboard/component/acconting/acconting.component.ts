import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-acconting',
  templateUrl: './acconting.component.html',
  styleUrls: ['./acconting.component.css']
})
export class AccontingComponent implements OnInit {
  
  constructor(
    private userServes:UserService
  ) { }

  ngOnInit(): void {
  
  
    this.getUserById()
  }
  
  getUserById()
  {
    this.userServes.getUserById().subscribe((D)=>{
      console.log(D);
      
    })
  }

}
