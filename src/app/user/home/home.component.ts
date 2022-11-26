import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artData: any[]
  pagNum :number =1
  constructor(private artService:ArticlesService) { }

  ngOnInit(): void {
    this.getSomeCat(this.pagNum)
  }

  getSomeCat(pagnum:number){
    this.artService.getArticles(pagnum).subscribe((e)=>{
      this.artData = e.data.paginatedData.slice(-3)
    })
  }
}
