import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutUrl= '/api/about/aboutUsDetail';
  aboutData: any;
  safedesc: SafeHtml | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.onLoadAbout()
  }

  onLoadAbout(){
    this.http.get(this.aboutUrl).subscribe(response => {
      this.aboutData = response;
      this.safedesc = this.sanitizer.bypassSecurityTrustHtml(this.aboutData[0].description)
    })
  }
}
