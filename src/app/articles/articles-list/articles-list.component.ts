import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleCategoryService } from 'src/app/services/articles/article-category.service';
import { ArticlesService } from 'src/app/services/articles/articles.service';



@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  datas:any;
  getCatogry:any;
  allCategory:any;

  constructor(private route:ActivatedRoute, private serv:ArticlesService, private artCSer:ArticleCategoryService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)

    const idOneCat = String(this.route.snapshot.paramMap.get('id'));


    // Get Art With Id
    this.serv.getArtWithId(idOneCat).subscribe((res) => {
      this.datas = res.data
      console.log(this.datas);
      
      // Get Arts With CtgoryName 
      this.serv.getWithCatName(this.datas?.categoryName).subscribe((allCategoryType) => {
        this.getCatogry = allCategoryType.data
      })
    })



    // Get All Category 
    this.artCSer.gitAllCatArt().subscribe((test) => {
      this.allCategory = test.data
      // console.log(test.data)
    })
  }


   

}
