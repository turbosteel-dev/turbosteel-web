import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-about-us-banner',
  templateUrl: './about-us-banner.component.html',
  styleUrls: ['./about-us-banner.component.scss']
})
export class AboutUsBannerComponent {
  bannerUrl= '/api/about/aboutUsBanner';
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.onLoadBanner()
  }

  onLoadBanner(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
