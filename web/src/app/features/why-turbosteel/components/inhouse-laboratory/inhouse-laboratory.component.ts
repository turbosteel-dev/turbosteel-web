import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-inhouse-laboratory',
  templateUrl: './inhouse-laboratory.component.html',
  styleUrls: ['./inhouse-laboratory.component.scss']
})
export class InhouseLaboratoryComponent {
  inhouseBannerUrl = '/api/inHouse/InHouseBanner'
  inhouseBannerData: any;
  inhouseUrl = '/api/inHouse/InHouseDetail'
  inhouseData: any;
  safeProductinhouse: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.onLoadinhouse();
  }

  onLoadinhouse(){
    this.http.get(this.inhouseBannerUrl).subscribe(response => {
      this.inhouseBannerData = response;
    });
    this.http.get(this.inhouseUrl).subscribe(response => {
      this.inhouseData = response;
      console.log(this.inhouseData)
      this.safeProductinhouse = this.sanitizer.bypassSecurityTrustHtml(this.inhouseData[0].description)
    });
  }
}
