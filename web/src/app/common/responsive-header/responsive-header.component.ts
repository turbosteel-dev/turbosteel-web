import { Component } from '@angular/core';
import { ResponsiveService } from '../../service/responsive.service';
import { RouterModule, Router } from '@angular/router';

import { HttpService } from '../../service/http.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-responsive-header',
  templateUrl: './responsive-header.component.html',
  styleUrls: ['./responsive-header.component.scss']
})
export class ResponsiveHeaderComponent {
  isSubMenuOpen = false;
  isAboutUsOpen = false;
  isMiningUsOpen = false;
  isCompaniesUsOpen = false;
  iswhyTurboSteelOpen = false;
  isProductUsOpen = false;
  isFacilitiesUsOpen = false;
  isCsrOpen = false;
  isBuyUsOpen = false;
  facilityCategoryData: any;
  productUrl = '/api/product/productDetail';
  productData: any;
  aboutUrl = '/api/header/aboutHeader';
  aboutData: any;
  turbosteelUrl = '/api/header/whyTurboSteelHeader';
  turbosteelData: any;
  registrationUrl = '/api/header/registrationHeader';
  registrationData: any;
  categoryListData: any;
  filterCategoryData: any;
  selectedCategoryIndex: number = 0;
  categoryName: any;
  isRegistrationUsOpen = false;
  facilityCategoryUrl = '/api/facilities/facilitiesCategory';

  constructor(public sidenavService: ResponsiveService, private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.onLoadFacilities();
    this.onLoadProducts();
    this.onLoadAbout();
    this.onLoadWhyTurbosteel();
    this.onLoadRegistration();
  }

  onClickProduct() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleAboutUsDropdown() {
    this.isAboutUsOpen = !this.isAboutUsOpen;
  }

  toggleWhyTurboDropdown(){
    this.iswhyTurboSteelOpen = !this.iswhyTurboSteelOpen;
  }

  toggleProductsDropdown() {
    this.isProductUsOpen = !this.isProductUsOpen;
  }

  toggleFacilitiesDropdown(){
    this.isFacilitiesUsOpen = !this.isFacilitiesUsOpen;
  }

  toggleBuyDropdown(){
    this.isBuyUsOpen = !this.isBuyUsOpen;
  }

  toggleRegistrationDropdown(){
    this.isRegistrationUsOpen = !this.isRegistrationUsOpen;
  }



  toggleCsrDropdown() {
    this.isCsrOpen = !this.isCsrOpen;
  }

  onLoadFacilities() {
    this.http.get(this.facilityCategoryUrl).subscribe(response => {
      this.facilityCategoryData = response;
    });
  }
 
  onLoadProducts() {
    this.http.get(this.productUrl).subscribe(response => {
      this.productData = response;
    });
  }
 
  onLoadAbout() {
    this.http.get(this.aboutUrl).subscribe(response => {
      this.aboutData = response;
    });
  }
 
  onLoadWhyTurbosteel() {
    this.http.get(this.turbosteelUrl).subscribe(response => {
      this.turbosteelData = response;
    });
  }
 
  onLoadRegistration() {
    this.http.get(this.registrationUrl).subscribe(response => {
      this.registrationData = response;
    });
  }


}
