import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryUrl = '/api/home/gallery'
  galleryData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.galleryUrl).subscribe(response => {
      this.galleryData = response;
    })
  }

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    auto: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };
}
