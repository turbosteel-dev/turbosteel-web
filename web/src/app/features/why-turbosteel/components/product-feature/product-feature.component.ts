import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.scss']
})
export class ProductFeatureComponent {
  featureBannerUrl = '/api/productFeature/productFeatureBanner'
  featureBannerData: any;
  featureUrl = '/api/productFeature/productFeatureDetail'
  featureData: any;
  safeProductfeature: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.onLoadfeature();
  }

  onLoadfeature(){
    this.http.get(this.featureBannerUrl).subscribe(response => {
      this.featureBannerData = response;
    });
    this.http.get(this.featureUrl).subscribe(response => {
      this.featureData = response;
      console.log(this.featureData)
      this.safeProductfeature = this.sanitizer.bypassSecurityTrustHtml(this.featureData[0].description)
    });
  }
}
