import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr'
import { LoaderComponent } from '../loader/loader.component';
@NgModule({
  declarations: [
    LoaderComponent
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
    LoaderComponent
  ]
})
export class SharedModule { }
