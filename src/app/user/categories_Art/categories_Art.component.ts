import { Component, OnInit } from '@angular/core';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-categories_Art',
  templateUrl: './categories_Art.component.html',
  styleUrls: ['./categories_Art.component.css']
})
export class Categories_ArtComponent implements OnInit {
  catogry_art:any
  constructor(private serArtCat:ArticleCategoryService) { }

  ngOnInit():void {
        // Get All Books Art
        this.serArtCat.gitAllCatArt().subscribe((response) => {
          this.catogry_art = response.data
          // console.log(this.catogry_art)
        })
  }

}
