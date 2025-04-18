import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  careerBannerUrl = '/api/career/careerBanner';
  careerBannerData: any;
  careerUrl = '/api/career/careerList';
  careerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.onLoadCareer();
  }

  onLoadCareer(){
    this.http.get(this.careerBannerUrl).subscribe(response => {
      this.careerBannerData = response;
    })
    this.http.get(this.careerUrl).subscribe(response => {
      this.careerData = response;
    })
  }

}
