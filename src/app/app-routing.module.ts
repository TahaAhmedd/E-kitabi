import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dMainComponent } from './dashboard/component/main/main.component';
import { uMainComponent } from './user/main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AccontingComponent } from './dashboard/component/acconting/acconting.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'AccontingComponent',component:AccontingComponent},
  {path:'',redirectTo:"user/home",pathMatch:'full'},

  { 
    path: 'user', component:uMainComponent, 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'articles', component:uMainComponent, 
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'dashboard',component:dMainComponent, 
    loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule )
  },
  {path:"**",component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
