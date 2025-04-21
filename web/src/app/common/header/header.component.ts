import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  facilityCategoryUrl = '/api/facilities/facilitiesCategory';
  facilityCategoryData: any;
  productUrl = '/api/product/productDetail';
  productData: any;
  aboutUrl = '/api/header/aboutHeader';
  aboutData: any;
  turbosteelUrl = '/api/header/whyTurboSteelHeader';
  turbosteelData: any;
  registrationUrl = '/api/header/registrationHeader';
  registrationData: any;
  isDropdownOpen: boolean = true;
  isSidenavOpen = false;
  openedDropdown: string | null = null;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.onLoadFacilities();
    this.onLoadProducts();
    this.onLoadAbout();
    this.onLoadWhyTurbosteel();
    this.onLoadRegistration();
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

  openDropdown(name: string): void {
    this.openedDropdown = name;
  }

  closeDropdown(): void {
    this.openedDropdown = null;
  }

  toggleDropdown(name: string): void {
    this.openedDropdown = this.openedDropdown === name ? null : name;
  }

  openSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}
