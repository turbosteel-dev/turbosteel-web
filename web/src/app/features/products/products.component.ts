import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productBannerUrl = '/api/product/productBanner/productBannerByUrl'
  productBannerData: any;
  productDetailUrl = '/api/product/productDetail/productDetailByUrl'
  productDetailData: any;
  dataId: any;
  safeProductDesc: SafeHtml | undefined;

  constructor(private http: HttpService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      if(this.dataId){
        this.onLoadProductBanner(this.dataId);
        this.onLoadProductDetail(this.dataId);
      }
    })
  }

  onLoadProductBanner(url: any){
    let urlId = this.productBannerUrl + '/' + url;
    this.http.get(urlId).subscribe(response => {
      this.productBannerData = response;
      console.log(this.productBannerData);
    })
  }

  onLoadProductDetail(url: any){
    let productdetailUrl = this.productDetailUrl + '/' + url;
    this.http.get(productdetailUrl).subscribe(response => {
      this.productDetailData = response;
      console.log(this.productDetailData);
      this.safeProductDesc = this.sanitizer.bypassSecurityTrustHtml(this.productDetailData.description)
    })
  }


}
