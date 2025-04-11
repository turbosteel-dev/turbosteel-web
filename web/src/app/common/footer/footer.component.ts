import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerUrl = '/api/home/footer'
  footerData: any;
  quickLinksUrl = '/api/home/quickLinks'
  quickLinksData: any;
  socialMediaUrl = '/api/home/socialMedia'
  socialMediaData: any;
  addressUrl = '/api/home/footerAddress'
  addressData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadFooter();
  }
  
  onLoadFooter() {
    this.http.get(this.footerUrl).subscribe(response => {
      this.footerData = response;
    });
    this.http.get(this.quickLinksUrl).subscribe(response => {
      this.quickLinksData = response;
    });
    this.http.get(this.socialMediaUrl).subscribe(response => {
      this.socialMediaData = response;
    });
    this.http.get(this.addressUrl).subscribe(response => {
      this.addressData = response;
    });
  }
}
