import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  bannerUrl = '/api/home/homebanners'
  bannerData: any;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    auto: true,
    autoplaySpeed: 2000
  };
}
