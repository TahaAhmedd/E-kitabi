import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class dMainComponent implements OnInit {
  flag:boolean = false
  test:any
  constructor(route: ActivatedRoute ) { 
    this.test = route.snapshot.children.map((i)=> i.url.map((e)=> e.path))
    // console.log("*******",test[0])
    if(this.test[0] == "login"){
      this.flag = true
    }
    else{
      this.flag = false
    }
  }

  ngOnInit(): void {

  }

}
