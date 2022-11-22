import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ar-details',
  templateUrl: './ar-details.component.html',
  styleUrls: ['./ar-details.component.css']
})
export class ArDetailsComponent implements OnInit {


  // This Var Use In Fetch Data In Html File
  articles: any

  // CatogeryWithCatogeryName 
  catogeryName:any

  // Enjection Services 
  constructor(
    private serv:ArticlesService,
    private route:ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {

    window.scrollTo(0,0)

    const catogeryName = String(this.route.snapshot.paramMap.get('title'));


    this.serv.getWithCatName(catogeryName).subscribe((res) => {

      this.catogeryName = res.data
      // console.log(this.catogeryName)
    })



    // Get All Articles 
    this.serv.getArticles().subscribe((d) => {

      this.articles = d.data
      // console.log(this.articles)
    })

    
  
  }
  
}
