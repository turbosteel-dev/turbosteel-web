import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certificationBannerUrl = '/api/certification/certificationBanner'
  certificationBannerData: any;
  certificationUrl = '/api/certification/certificationDetail'
  certificationData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
   this.onLoadcertification();
  }

  onLoadcertification(){
    this.http.get(this.certificationBannerUrl).subscribe(response => {
      this.certificationBannerData = response;
      console.log(this.certificationBannerData)
    });
  }
}
