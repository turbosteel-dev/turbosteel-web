import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-chairman-message',
  templateUrl: './chairman-message.component.html',
  styleUrls: ['./chairman-message.component.scss']
})
export class ChairmanMessageComponent {
  messageBannerUrl = '/api/chairman/chairmanBanner'
  messageBannerData: any;
  messageUrl = '/api/chairman/chairmanDetail'
  messageData: any;
  safeDesc: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onLoadmessage();
  }

  onLoadmessage() {
    this.http.get(this.messageBannerUrl).subscribe(response => {
      this.messageBannerData = response;
    });
    this.http.get(this.messageUrl).subscribe(response => {
      this.messageData = response;
      this.safeDesc = this.sanitizer.bypassSecurityTrustHtml(this.messageData[0].description);
    });
  }
}
