import { NgModule } from '@angular/core';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ListBookeComponent } from './component/list-booke/list-booke.component';
import { AccontingComponent } from './component/acconting/acconting.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './component/card/card.component';
import { dMainComponent } from './component/main/main.component';
import { AddArticalComponent } from './component/add-artical/add-artical.component';
import { AddBookeComponent } from './component/add-booke/add-booke.component';
import { BookeCategoryComponent } from './component/booke-category/booke-category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { LoginComponent } from '../login/login.component';
import { AuthAdminGuard } from '../GArd/auth-admin.guard';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
let routes: Routes =[
    { path: '', redirectTo:"/dashboard/card",pathMatch:'full'}
  , { path: 'card', component:CardComponent ,canActivate:[AuthAdminGuard]}//dashboard/home
  , { path: 'list', component:ListBookeComponent ,canActivate:[AuthAdminGuard]}   //dashboard/list
  , { path: 'allartical',component :ListUserComponent ,canActivate:[AuthAdminGuard]}
  , { path: 'Editaccount',component :AccontingComponent ,canActivate:[AuthAdminGuard]}
  , { path: 'addartical',component :AddArticalComponent ,canActivate:[AuthAdminGuard]}
  , { path: 'addBooke',component :AddBookeComponent ,canActivate:[AuthAdminGuard]}
  , { path: 'Allcategorey',component :BookeCategoryComponent ,canActivate:[AuthAdminGuard]}
]


@NgModule({
  declarations: [
    SidbarComponent,
    ListUserComponent,
    ListBookeComponent,
    AccontingComponent,
    CardComponent,
    dMainComponent,
    BookeCategoryComponent,
    AddCategoryComponent,
    AddArticalComponent
    
    // MatPaginatorModule
  ],
  imports: [
    ReactiveFormsModule,
  SharedModule,
    RouterModule.forChild(routes),
    FormsModule ,
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardModule { }
