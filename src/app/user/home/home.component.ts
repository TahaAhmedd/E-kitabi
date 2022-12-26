import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/Model/Banner';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `<app-banner [banner]="banner"></app-banner>`,
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  banner: Banner;
  artData: any[]
  pagNum :number =1
  constructor(private artService:ArticlesService) {
    this.banner = new Banner(
      'ca-pub-5314532163672151',
      '6264682910',
      'auto',
      'true'
    )
   }

  ngOnInit(): void {
    this.getSomeCat(this.pagNum)
  }

  getSomeCat(pagnum:number){
    this.artService.getArticles(pagnum).subscribe((e)=>{
      this.artData = e.data.paginatedData.slice(-3)
    })
  }
}
