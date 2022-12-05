import { Component, OnInit } from '@angular/core';
import { CatigotyBookService } from 'src/app/services/books/catigoty-book.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
catogry:any
// setlocalstorge(value){
//   localStorage.setItem("catogry",value)
// }
  constructor(private serBookCat:CatigotyBookService) { }

  ngOnInit(): void {

    // Get All Books Art
    this.serBookCat.getAllBookCat().subscribe((response) => {
      this.catogry = response.data
      // console.log(this.catogry)
    })


  }

}



