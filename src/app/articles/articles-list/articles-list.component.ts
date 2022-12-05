import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
  date: any;
  value: any;
  datePipe = new DatePipe('en-US');
  keywords: any;
  constructor(private route:ActivatedRoute,private metaTagService:Meta, private serv:ArticlesService, private artCSer:ArticleCategoryService) { 



  }

  ngOnInit(): void {
    window.scrollTo(0,0)

    const idOneCat = String(this.route.snapshot.paramMap.get('id'));


    // Get Art With Id
    this.serv.getArtWithId(idOneCat).subscribe((res) => {
      this.datas = res.data
      // console.log(this.datas);
      
      // Get Arts With CtgoryName 
      this.serv.getWithCatName(this.datas?.categoryName).subscribe((allCategoryType) => {
        this.getCatogry = allCategoryType.data
        this.date=this.datas.createdAt
        // console.log(this.date);
        this.keywords=[...this.datas.keywords]
        console.log(this.datas);
        this.value = this.datePipe.transform(this.date,'dd/MM/yyyy');
        // console.log(this.value);
        this.metaTagService.updateTag(
          { name: 'date', content:`${this.value}` }
          );
          this.metaTagService.updateTag(
            { name: 'keywords', content: `${this.keywords}` }
            );
      })
    })



    // Get All Category 
    this.artCSer.gitAllCatArt().subscribe((test) => {
      this.allCategory = test.data
      // console.log(test.data)

    })
  };


 test() {
    console.log("test");
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

}
