import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'articles', 
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
