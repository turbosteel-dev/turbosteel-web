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

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.onLoadmanufacture();
  }

  onLoadmanufacture(){
    this.http.get(this.manufactureBannerUrl).subscribe(response => {
      this.manufactureBannerData = response;
      console.log(this.manufactureBannerData)
    });
    // this.http.get(this.manufactureUrl).subscribe(response => {
    //   this.manufactureData = response;
    //   console.log(this.manufactureData)
    //   this.safeProductmanufacture = this.sanitizer.bypassSecurityTrustHtml(this.manufactureData[0].description)
    // });
  }
}
