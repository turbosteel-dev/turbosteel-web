import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDropdownOpen: boolean = true;
  facilityCategoryUrl = '/api/facilities/facilitiesCategory'
  facilityCategoryData: any;
  productUrl = '/api/product/productDetail'
  productData: any;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.onLoadFacilities();
    this.onLoadProducts();
  }

  onLoadFacilities() {
    this.http.get(this.facilityCategoryUrl).subscribe(response => {
      this.facilityCategoryData = response;
    });
  }

  onLoadProducts(){
    this.http.get(this.productUrl).subscribe(response => {
      this.productData = response;
    });
  }


  openDropdown(): void {
    this.isDropdownOpen = true;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
