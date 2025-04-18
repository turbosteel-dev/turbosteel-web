import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  GalleryUrl= '/api/about/aboutUsGallery';
  galleryData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.onLoadGallery()
  }

  onLoadGallery(){
    this.http.get(this.GalleryUrl).subscribe(response => {
      this.galleryData = response;
      console.log(this.galleryData)
    })
  }
}
