import { Component } from '@angular/core';
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

  constructor(private http: HttpService, private router: Router) { }

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
    });
  }

  closePopup(): void {
    this.showPopup = false;
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.popupData.length;
  }

  // Method to show the previous item
  prevItem(): void {
    this.currentIndex = (this.currentIndex - 1 + this.popupData.length) % this.popupData.length;
  }
}
