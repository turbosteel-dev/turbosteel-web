import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  selectedTabId: any = null;
  galleryImg: any;
  mediaBannerUrl = '/api/media/mediaBanner'
  mediaBannerData: any;
  mediaUrl = '/api/media/mediaCategory'
  mediaData: any;
  mediaGalleryUrl = '/api/media/mediaDetail'
  mediaGalleryData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadmedia();
  }

  onLoadmedia() {
    this.http.get(this.mediaBannerUrl).subscribe(response => {
      this.mediaBannerData = response;
    });
    this.http.get(this.mediaUrl).subscribe(response => {
      this.mediaData = response;
    });
    this.http.get(this.mediaGalleryUrl).subscribe(response => {
      this.mediaGalleryData = response;
      this.selectFirstTab();
    });
  }

  selectFirstTab(){
    if (this.mediaData && this.mediaData.length > 0) {
      this.selectedTabId = this.mediaData[0].url;
      this.onClickTabHead(this.selectedTabId);
    }
  }

  onClickTabHead(url: any) {
    this.selectedTabId = url;
    this.galleryImg = this.mediaGalleryData.filter((p: any) => p.mediaCategoryUrlId === url);
  }
}
