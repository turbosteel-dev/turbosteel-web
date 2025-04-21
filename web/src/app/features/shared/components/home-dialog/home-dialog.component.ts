import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent {
  popupUrl = '/api/priceTag/priceTag';
  showPopup = false;
  popupData: any[] = [];
  currentIndex = 0; 
  safePrice: SafeHtml[] = [];

  constructor(private http: HttpService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchPopupData();
    }, 3000);
  }

  fetchPopupData(): void {
    this.http.get(this.popupUrl).subscribe((response: any) => {
      this.popupData = response;
      console.log(this.popupData)
      this.showPopup = true;
      
      this.safePrice = this.popupData.map((item: any) => {
        return this.sanitizer.bypassSecurityTrustHtml(item.description)
      })

      const cycleDataInterval = setInterval(() => {
        if (this.currentIndex < this.popupData.length-1) {
          this.currentIndex++;
        } else {
          clearInterval(cycleDataInterval);
          this.closePopup();
        }
      }, 450000);
    });
  }

  closePopup(): void {
    this.showPopup = false;
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.popupData.length;
  }

}
