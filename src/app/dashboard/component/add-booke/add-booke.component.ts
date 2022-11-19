import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-booke',
  templateUrl: './add-booke.component.html',
  styleUrls: ['./add-booke.component.css']
})
export class AddBookeComponent implements OnInit {
  imageSrc: any ;
  imagearr:any=[];
  constructor() { }
  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files;
  for (var i = 0; i < file.length; i++) {
    const reader = new FileReader();
    reader.onload = e => this.imagearr.push(e.target!.result);
    reader.readAsDataURL(file[i]);
    
    
  }
  // console.log(this.imagearr);
        
      }
  }
  ngOnInit(): void {
  }

}
