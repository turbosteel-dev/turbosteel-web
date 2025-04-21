import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-buy-banner',
  templateUrl: './buy-banner.component.html',
  styleUrls: ['./buy-banner.component.scss']
})
export class BuyBannerComponent {
 bannerUrl= '/api/forms/BuyForm';
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
