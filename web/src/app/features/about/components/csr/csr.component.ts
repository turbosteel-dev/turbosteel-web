import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
declare var bootstrap: any;

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss']
})
export class CsrComponent {
  selectedId: any = null;
  csrGallery: any;
  activeSlideIndex: number = 0;

  csrBannerUrl = '/api/csr/csrBanner'
  csrBannerData: any;
  csrCategoryUrl = '/api/csr/csrCategory'
  csrCategoryData: any;
  csrUrl = '/api/csr/csrDetail'
  csrData: any;

  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;
  miningGalleryUrl = '/api/csr/csrDetail';
  galleryData: any;
  filterGallery: any;
  dataId: any;

  isLightboxOpen = false;
  currentImage = '';
  currentIndex = 0;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadcsr();
 
  }

  onLoadcsr() {
    this.http.get(this.csrBannerUrl).subscribe(response => {
      this.csrBannerData = response;
    });
    this.http.get(this.csrCategoryUrl).subscribe(response => {
      this.csrCategoryData = response;
      console.log(this.csrCategoryData);
    });
    this.http.get(this.csrUrl).subscribe(response => {
      this.csrData = response;
      console.log(this.csrData);
      this.onClickTab('all')
    });
  }


  onClickTab(url: any) {
    this.selectedId = url;
    console.log(this.selectedId);
    if (url === 'all') {
      this.csrGallery = this.csrData;
    } else {
      this.csrGallery = this.csrData.filter((p: any) => p.csrCategoryUrlId === url);
    }
    console.log(this.csrGallery);
  }
  
  openLightbox(index: number) {
    this.isLightboxOpen = true;
    this.currentIndex = index;
    this.currentImage = this.csrGallery[index].imageUrl;
      document.body.style.overflowY = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflowY = 'auto'
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex =
      (this.currentIndex - 1 + this.csrGallery.length) %
      this.csrGallery.length;
    this.currentImage = 
      this.csrGallery[this.currentIndex].imageUrl;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.csrGallery.length;
    this.currentImage =
      this.csrGallery[this.currentIndex].imageUrl;
  }

}
