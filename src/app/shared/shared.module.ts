import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr'
// import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      timeOut:2000,
    }),
  ],
  exports :[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule
  ]
})
export class SharedModule { }
