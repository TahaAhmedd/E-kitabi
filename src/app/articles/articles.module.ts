import { NgModule } from '@angular/core';
import { ArDetailsComponent } from './ar-details/ar-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CategoriesComponent } from '../user/categories/categories.component';
import { HomeComponent } from '../user/home/home.component';
import { AboutusComponent } from '../user/aboutus/aboutus.component';
import { ContactusComponent } from '../user/contactus/contactus.component';

let routes : Routes =[
  {path:'list', component:ArticlesListComponent},
  {path:'details', component:ArDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
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
