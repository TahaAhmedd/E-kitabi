import { NgModule } from '@angular/core';
import { BrowserModule,Meta  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './services/loader.interceptor';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { GetBookBySubCatComponent } from './get-book-by-sub-cat/get-book-by-sub-cat.component';
import { AdsenseModule } from 'ng2-adsense';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    SubCategoryComponent,
    GetBookBySubCatComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5445757198861186',
      adSlot: 8338719125,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    Meta 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
