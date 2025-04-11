import { Component, OnInit } from '@angular/core';
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
      this.selectFirstTab();
    });
  }

  selectFirstTab() {
    if (this.csrCategoryData && this.csrCategoryData.length > 0) {
      this.selectedId = this.csrCategoryData[0].url;
      this.onClickTab(this.selectedId)
    }
  }

  csrCategory = [
    {
      id: '1',
      title: "COVID RELIEF WORKS",
      children: [
        {
          img: "assets/images/csr/1.jpg",
          text: "Community Health Center"
        },
        {
          img: "assets/images/csr/2.jpg",
          text: "COVID-19 Relief works"
        },
        {
          img: "assets/images/csr/3.jpg",
          text: "Donating Medical Equipments"
        },
        {
          img: "assets/images/csr/4.jpg",
          text: "Donating Medical Equipments"
        },
        {
          img: "assets/images/csr/5.jpg",
          text: "Donating Medical Equipments"
        }
      ]
    },
    {
      id: '2',
      title: "HEALTHCARE",
      children: [
        {
          img: "assets/images/csr/6.jpg",
          text: "Ambulance Donated"
        },
        {
          img: "assets/images/csr/7.jpg",
          text: "Mobile Health Clinic"
        },
        {
          img: "assets/images/csr/8.jpg",
          text: "Specialized Health Camps"
        }
      ]
    },
    {
      id: '3',
      title: "EDUACTION",
      children: [
        {
          img: "assets/images/csr/9.jpg",
          text: "Providing Elementary Infrastructure"
        },
        {
          img: "assets/images/csr/10.jpg",
          text: "Midday Meals Dining Halls"
        },
        {
          img: "assets/images/csr/11.jpg",
          text: "Infrastructure Support"
        },
        {
          img: "assets/images/csr/12.jpg",
          text: "Constructed Classrooms"
        }
      ]
    }
  ]


  onClickTab(url: any) {
    this.selectedId = url;
    console.log(this.selectedId)
    this.csrGallery = this.csrData.filter((p: any) => p.csrCategoryUrlId === url)
    console.log(this.csrGallery)
  }
  
  openLightbox(index: number, event: Event) {
    event.preventDefault();
    this.activeSlideIndex = index;

    setTimeout(() => {
      const carousel = document.querySelector('#carouselLightbox');
      if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel);
        bsCarousel.to(index);
      }

      const modal = document.getElementById('lightboxModal');
      if (modal) {
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
      }
    }, 0);
  }

}
