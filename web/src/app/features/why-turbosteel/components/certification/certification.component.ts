import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certificationBannerUrl = '/api/certification/certificationBanner'
  certificationBannerData: any;
  certificationCategoryUrl = '/api/certification/certficartionCategory'
  certificationCategoryData: any;
  certificationUrl = '/api/certification/certificationDetails'
  certificationData: any;
  certificationResponseData: any;
  selectedUrl: any;
  
  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onLoadcertification();
  }

  onLoadcertification() {
    this.http.get(this.certificationBannerUrl).subscribe(response => {
      this.certificationBannerData = response;
    });
    this.http.get(this.certificationCategoryUrl).subscribe(response => {
      this.certificationCategoryData = response;
      console.log(this.certificationCategoryData)
      if(this.certificationCategoryData?.length>0){
        this.onClickCategory(this.certificationCategoryData[0].url);
      }
    });
  }

  onClickCategory(url: any) {
    this.selectedUrl = url;
    this.http.get(this.certificationUrl).subscribe(response => {
      this.certificationData = response;
      console.log(this.certificationData)
      this.certificationResponseData = this.certificationData.filter((p: any) => p.certification_url === url);
      console.log(this.certificationResponseData)
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
