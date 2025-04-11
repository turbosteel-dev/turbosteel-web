import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-erm-overview',
  templateUrl: './erm-overview.component.html',
  styleUrls: ['./erm-overview.component.scss']
})
export class ErmOverviewComponent {
  overviewBannerUrl = '/api/erm/ermBanner'
  overviewBannerData: any;
  overviewUrl = '/api/erm/ermGroup'
  overviewData: any;
  safeDesc: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onLoadoverview();
  }

  onLoadoverview() {
    this.http.get(this.overviewBannerUrl).subscribe(response => {
      this.overviewBannerData = response;
    });
    this.http.get(this.overviewUrl).subscribe(response => {
      this.overviewData = response;
      this.safeDesc = this.sanitizer.bypassSecurityTrustHtml(this.overviewData[0].description);
    });
  }
}
