import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutUrl = '/api/home/homeAboutUs'
  aboutData: any;
  safeDesc : SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.http.get(this.aboutUrl).subscribe(response => {
      this.aboutData = response;
      this.safeDesc = this.sanitizer.bypassSecurityTrustHtml(this.aboutData[0].description)
    })
  }
}
