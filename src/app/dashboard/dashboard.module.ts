import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ListBookeComponent } from './component/list-booke/list-booke.component';
import { AccontingComponent } from './component/acconting/acconting.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './component/card/card.component';
import { dMainComponent } from './component/main/main.component';

let routes : Routes =[
  {path:'',redirectTo:"/dashboard/card",pathMatch:'full'},
  {path:'card', component:CardComponent},//dashboard/home
  {path:'list', component:ListBookeComponent},//dashboard/list
  { path: 'allUser',component :ListUserComponent },
  { path: 'accounting',component :AccontingComponent }
]


@NgModule({
  declarations: [
    SidbarComponent,
    ListUserComponent,
    ListBookeComponent,
    AccontingComponent,
    CardComponent,
    dMainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardModule { }
