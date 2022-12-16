import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  catogry:any=[
     
     {title:"Civil" ,cover:"../../assets/Subcat/civel.png"}
    ,{title:"Architectural" ,cover:"../../assets/Subcat/IMG_20221212_213129_618.png"}
    ,{title:"Mechanical" ,cover:"../../assets/Subcat/Mechanical.png"}
    ,{title:"Electrical" ,cover:"../../assets/Subcat/Electronic.png"}
    ,{title:"Surveying" ,cover:"../../assets/Subcat/Survying.png"}
    ,{title:"Electronics" ,cover:"../../assets/Subcat/IMG_20221212_213129_771.png"}
  ]
constructor()
{

}
  ngOnInit(): void {
    
  }
}
