import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  contactBannerUrl = '/api/contact/contactBanner'
  contactBannerData: any;
  contactAddressUrl = '/api/contact/contactAddressList'
  contactAddressData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadContactDetail();
  }

  onLoadContactDetail(){
    this.http.get(this.contactBannerUrl).subscribe(response => {
      this.contactBannerData = response;
    })
    this.http.get(this.contactAddressUrl).subscribe(response => {
      this.contactAddressData = response;
      console.log(this.contactAddressData)
    })
  }

}
