import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ResponsiveService } from 'src/app/service/responsive.service';
import { Subscription } from 'rxjs';

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
  responsiveSub!: Subscription;
  isMobile: boolean = false;
  openedDropdown: string | null = null;

  constructor(private router: Router, private http: HttpService, public responsiveService: ResponsiveService) {
    // this.router.events.subscribe(() => {
    //   this.openedDropdown = null;
    // });
  }

  ngOnInit() {
    this.responsiveSub = this.responsiveService.isResponsiveOpen.subscribe((val: any) => {
      this.isSidenavOpen = val;
    });
    this.isMobile = window.innerWidth <= 1199; // mobile breakpoint
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1199;
    });
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
  goToNewsCenter(){
    this.router.navigate(['/home'], {fragment: 'news-center'})
  }
  openDropdown(name: string): void {
    this.openedDropdown = name;
  }

  closeDropdown(): void {
    this.openedDropdown = null;
  }

  toggleDropdown(name: string): void {
    if (!this.isMobile) return;
    if (event) event.stopPropagation();
    this.openedDropdown = this.openedDropdown === name ? null : name;
  }

  openSidenav() {
    this.responsiveService.openResponsive();
  }

  closeSidenav() {
    this.responsiveService.closeResponsive();
  }
}
