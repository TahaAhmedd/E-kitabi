import { NgModule } from '@angular/core';
import { ArDetailsComponent } from './ar-details/ar-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CategoriesComponent } from '../user/categories/categories.component';
import { HomeComponent } from '../user/home/home.component';
import { AboutusComponent } from '../user/aboutus/aboutus.component';
import { ContactusComponent } from '../user/contactus/contactus.component';
import { Categories_ArtComponent } from '../user/categories_Art/categories_Art.component';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { AdsenseModule } from 'ng2-adsense';

let routes : Routes =[
  {path:'list/:id', component:ArticlesListComponent},
  // After Cat Art 
  {path:'details/:title', component:ArDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'categories_Art', component:Categories_ArtComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
]


@NgModule({
  declarations: [
    ArDetailsComponent,
    ArticlesListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5314532163672151',
      adSlot: 6264682910,
    }),
  ]
})
export class ArticlesModule { }
