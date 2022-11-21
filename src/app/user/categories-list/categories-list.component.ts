import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  filterCatogry=localStorage.getItem("catogry")
  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
