import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule

=======
    AppRoutingModule,
>>>>>>> 9ab2f1b0242234bba0bba28c1c41ab7592dd98b9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
