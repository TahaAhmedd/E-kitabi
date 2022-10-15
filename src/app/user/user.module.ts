import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { DownloadBookComponent } from './download-book/download-book.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewbooksComponent } from './newbooks/newbooks.component';
import { SomebookComponent } from './somebook/somebook.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../articles/list/articles-list.component';
import { SharedModule } from '../shared/shared.module';

let routes : Routes =[
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'list', component:CategoriesListComponent},
  {path:'download', component:DownloadBookComponent},
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    DownloadBookComponent,
    HomeComponent,
    HeaderComponent,
    NewbooksComponent,
    SomebookComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
