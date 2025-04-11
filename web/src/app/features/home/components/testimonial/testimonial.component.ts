import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  testimonialUrl = '/api/home/testimonials'
  testimonialData: any;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.testimonialUrl).subscribe(response => {
      this.testimonialData = response;
    })
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  prevSlide(): void {
    this.slickModal.slickPrev();
  }

  nextSlide(): void {
    this.slickModal.slickNext();
  }
}
