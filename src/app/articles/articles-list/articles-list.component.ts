import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';



@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serv:ArticlesService) { }

  ngOnInit(): void {

    const idOneCat = String(this.route.snapshot.paramMap.get('id'));

    console.log(idOneCat);


      this.serv.getArtWithId(idOneCat).subscribe((f) => {
  
        console.log(f)
      })


  }



}
