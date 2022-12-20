import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Banner } from '../Model/Banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit  {
  @Input() banner: Banner;
  showAd = environment.adsense.show;
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
          (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
              overlays: {bottom: true}
          });
      } catch (e) {
          console.error(e);
      }
  }, 0);
  }

}
