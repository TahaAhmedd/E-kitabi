import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-ar-details',
  templateUrl: './ar-details.component.html',
  styleUrls: ['./ar-details.component.css']
})
export class ArDetailsComponent implements OnInit {


  // This Var Use In Fetch Data In Html File
  articles: any

  // Enjection Services 
  constructor(private serv:ArticlesService) { }

  ngOnInit() {

    this.serv.getArticles().subscribe(response => {
      this.articles = response;


      // Use Test 
      console.log(this.articles.data)
    });


    
  
  }
  
}
