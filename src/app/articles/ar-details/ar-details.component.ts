import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ar-details',
  templateUrl: './ar-details.component.html',
  styleUrls: ['./ar-details.component.css']
})
export class ArDetailsComponent implements OnInit {


  // This Var Use In Fetch Data In Html File
  articles: any[]
  pagNum :number=1
  // CatogeryWithCatogeryName 
  catogeryName:any[] = []
  AllArtOfcatogeryName:any[]
  formSearch:FormGroup
  // Enjection Services 
  constructor(
    private serv:ArticlesService,
    private route:ActivatedRoute,
    private location: Location
    ) { 
      this.formSearch = new FormGroup({
        title: new FormControl("") 
      })
    }

  ngOnInit() {

    window.scrollTo(0,0)

    const catogeryName = String(this.route.snapshot.paramMap.get('title'));


    this.serv.getWithCatName(catogeryName).subscribe((res) => {

      this.catogeryName = res.data
      this.AllArtOfcatogeryName = res.data
      // console.log(this.catogeryName)
    })



    // Get All Articles 
    this.serv.getArticles(this.pagNum).subscribe((d) => {

      this.articles = d.data.paginatedData.slice(-4)
      // console.log(this.articles)
    })

  }
  
  search(){
    if(this.formSearch.get("title").value == ""){
      this.catogeryName = this.AllArtOfcatogeryName
    }
    else{
      this.serv.searchArticle(this.formSearch.get("title").value).subscribe({
        next: (res)=>{
          // console.log(res)
          this.catogeryName = res.data
        },
        error:(err)=> console.log(err)
      })
    }
  }
}
