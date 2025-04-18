import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-manufacturing-process',
  templateUrl: './manufacturing-process.component.html',
  styleUrls: ['./manufacturing-process.component.scss']
})
export class ManufacturingProcessComponent {
  manufactureBannerUrl = '/api/manufacture/manufactureBanner'
  manufactureBannerData: any;
  manufactureUrl = '/api/manufacture/manufactureDetail'
  manufactureData: any;
  safeProductmanufacture: SafeHtml | undefined;
  manufactureCategory: any;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onLoadmanufacture();
    
  }

  onLoadmanufacture() {
    this.http.get(this.manufactureBannerUrl).subscribe(response => {
      this.manufactureBannerData = response;
    });
    this.http.get(this.manufactureUrl).subscribe(response => {
      this.manufactureData = response;
      console.log(this.manufactureData)
      if (this.manufactureData) {
        this.onClickManufactureCategory(this.manufactureData[0].manufacture_category_id);
      }
    });
  }

  onClickManufactureCategory(url: any) {
    this.manufactureCategory = this.manufactureData.find((p: any) => p.manufacture_category_id === url);
    this.safeProductmanufacture = this.sanitizer.bypassSecurityTrustHtml(this.manufactureCategory.description)
  }
}
