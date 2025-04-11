import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  facilityUrl = '/api/facilities/facilitiesBanner/facilitiesByUrl'
  facilityData: any;
  facilityDetailUrl = '/api/facilities/facilitiesDetail/facilitiesByUrl'
  facilityDetailData: any;
  dataId: any;
  data: any;
  facilityDesc: SafeHtml | undefined;


  constructor(private http: HttpService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onLoadFacilities();
  }

  onLoadFacilities() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.dataId = param.get('url');
      if (this.dataId) {
        this.onLoadFacilityBannerData(this.dataId);
        this.onLoadFacilityData(this.dataId);
      }
    });
  }

  onLoadFacilityBannerData(url: any) {
    let urlData = this.facilityUrl + '/' + url;
    this.http.get(urlData).subscribe(response => {
      this.data = response;
    });
  }

  onLoadFacilityData(url: any) {
    let urlData = this.facilityDetailUrl + '/' + url;
    this.http.get(urlData).subscribe(response => {
      this.facilityDetailData = response;
      this.facilityDesc = this.sanitizer.bypassSecurityTrustHtml(this.facilityDetailData.description)
    });
  }

}
