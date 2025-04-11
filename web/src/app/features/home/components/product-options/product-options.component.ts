import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss']
})
export class ProductOptionsComponent {

  productUrl = '/api/home/homeProductList'
  productData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.productUrl).subscribe(response => {
      this.productData = response;
    })
  }

}
