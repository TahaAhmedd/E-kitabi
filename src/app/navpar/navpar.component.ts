import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
shownav(){
  let textShow = document.getElementById("text-show")
  textShow?.classList.toggle("showNav")
}
}
