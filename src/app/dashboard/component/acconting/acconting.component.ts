import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-acconting',
  templateUrl: './acconting.component.html',
  styleUrls: ['./acconting.component.css']
})
export class AccontingComponent implements OnInit {
  id: any=localStorage.getItem('id');
  constructor(
    private userServes:UserService
  ) { }

  ngOnInit(): void {
  
  
    this.getUserById(this.id)
  }
  
  getUserById(id:any)
  {
    this.userServes.getUserById(id).subscribe((D)=>{
      console.log(D);
      
    })
  }

}
