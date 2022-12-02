import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { DownloadBookComponent } from './download-book/download-book.component';
import { FooterComponent } from './../footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewbooksComponent } from './newbooks/newbooks.component';
import { SomebookComponent } from './somebook/somebook.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { uMainComponent } from './main/main.component';
import { NavparComponent } from '../navpar/navpar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PolicyComponent } from './policy/policy.component';
import { PreviewComponent } from './preview/preview.component';
import { LoginComponent } from '../login/login.component';

let routes : Routes =[
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'list', component:CategoriesListComponent},
  {path:'download/:id', component:DownloadBookComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'policy', component:PolicyComponent},
  {path:"preview",component:PreviewComponent},

]

@NgModule({
  declarations: [
    NavparComponent,
    FooterComponent,
    uMainComponent,
    CategoriesComponent,
    CategoriesListComponent,
    DownloadBookComponent,
    HomeComponent,
    HeaderComponent,
    NewbooksComponent,
    SomebookComponent,
    AboutusComponent,
    ContactusComponent,
    PolicyComponent,
    PreviewComponent,
    
  ],
  imports: [

SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
