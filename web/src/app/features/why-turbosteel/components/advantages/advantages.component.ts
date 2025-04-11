import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  advantagesBannerUrl = '/api/turboSteel/turboSteelBanner'
  advantagesBannerData: any;
  advantagesUrl = '/api/turboSteel/turboSteelList'
  advantagesData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
   this.onLoadAdvantages();
  }

  onLoadAdvantages(){
    this.http.get(this.advantagesBannerUrl).subscribe(response => {
      this.advantagesBannerData = response;
    });
    this.http.get(this.advantagesUrl).subscribe(response => {
      this.advantagesData = response;
      console.log(this.advantagesData)
    });
  }
}
