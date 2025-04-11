import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  mapUrl = '/api/contact/contactMap'
  mapData: any;
  safeMap: SafeResourceUrl | undefined;

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get(this.mapUrl).subscribe(response => {
      this.mapData = response;
      this.safeMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapData[0].map_url)
    })
  }
}
