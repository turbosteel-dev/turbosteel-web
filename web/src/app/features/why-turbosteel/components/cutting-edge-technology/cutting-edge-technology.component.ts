import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-cutting-edge-technology',
  templateUrl: './cutting-edge-technology.component.html',
  styleUrls: ['./cutting-edge-technology.component.scss']
})
export class CuttingEdgeTechnologyComponent {
  technologyBannerUrl = '/api/cuttingEdge/cuttingEdgeBanner'
  technologyBannerData: any;
  technologyUrl = '/api/cuttingEdge/cuttingEdgeDetail'
  technologyData: any;
  safeTechnologyOne: SafeHtml | undefined;
  safeTechnologyTwo: SafeHtml | undefined;
  safeTechnologyThree: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.onLoadtechnology();
  }

  onLoadtechnology(){
    this.http.get(this.technologyBannerUrl).subscribe(response => {
      this.technologyBannerData = response;
    });
    this.http.get(this.technologyUrl).subscribe(response => {
      this.technologyData = response;
      console.log(this.technologyData)
      this.safeTechnologyOne = this.sanitizer.bypassSecurityTrustHtml(this.technologyData[0].description_one)
      this.safeTechnologyTwo = this.sanitizer.bypassSecurityTrustHtml(this.technologyData[0].description_two)
      this.safeTechnologyThree = this.sanitizer.bypassSecurityTrustHtml(this.technologyData[0].description_three)
    });
  }
}
