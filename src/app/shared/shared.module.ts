import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr'
import { LoaderComponent } from '../loader/loader.component';
import { BannerComponent } from '../banner/banner.component';
@NgModule({
  declarations: [
    LoaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-left',
      timeOut:2000,
    }),
  ],
  exports :[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule,
    LoaderComponent,
    BannerComponent
  ]
})
export class SharedModule { }
