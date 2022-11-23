import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-kitabi';
  isLoading:Subject<boolean>
  constructor(private loader:LoaderService){
    this.isLoading = this.loader.isLoading
  }
}
