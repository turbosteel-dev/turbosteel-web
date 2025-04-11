import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss']
})
export class MissionVisionComponent {
  visionBannerUrl = '/api/vision/visionBanner'
  visionBannerData: any;
  visionUrl = '/api/vision/visionList'
  visionData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadVision();
  }

  onLoadVision() {
    this.http.get(this.visionBannerUrl).subscribe(response => {
      this.visionBannerData = response;
    });
    this.http.get(this.visionUrl).subscribe(response => {
      this.visionData = response;
      console.log(this.visionData);
    });
  }
}
