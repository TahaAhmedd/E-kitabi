import { NgModule } from '@angular/core';
import { ArDetailsComponent } from './ar-details/ar-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';

let routes : Routes =[
  {path:'list', component:ArticlesListComponent},
  {path:'details', component:ArDetailsComponent},
]


@NgModule({
  declarations: [
    ArDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)    
  ]
})
export class ArticlesModule { }
