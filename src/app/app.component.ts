import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { Meta, Title } from '@angular/platform-browser';
import { Banner } from './Model/Banner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<app-banner [banner]="banner"></app-banner>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'EKitabi';
  banner: Banner;
  isLoading: Subject<boolean>;
  constructor(
    private loader: LoaderService,
    private metaService: Meta,
    private title: Title
  ) {
    this.isLoading = this.loader.isLoading;
  }
  ngOnInit() {
    this.banner = new Banner(
      'ca-pub-5314532163672151',
      '5314532163672151',
      'auto',
     'true'
    )
    this.metaService.addTags([
      { name: 'keywords', content: 'stories ,books ,novels ,' },
      {
        name: 'description',
        content:
          'At e-kitabi website, we offer you a package of the best books in all fields, including the field of engineering in all its branches, and there are stories and novels, as well as history, animals, and others, books constantly renewed. You can read and download books for free.',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
    this.title.setTitle('EKitabi');
  }
}
