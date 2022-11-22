import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artData: any[]
  constructor(private artService:ArticlesService) { }

  ngOnInit(): void {
    this.getSomeCat()
  }

  getSomeCat(){
    this.artService.getArticles().subscribe((e)=>{
      this.artData = e.data.slice(-3)
    })
  }
}
