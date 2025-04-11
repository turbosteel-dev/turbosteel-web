import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ProductOptionsComponent } from './components/product-options/product-options.component';
import { ManufacturingProcessComponent } from './components/manufacturing-process/manufacturing-process.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsCenterComponent } from './components/news-center/news-center.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ProductOptionsComponent,
    ManufacturingProcessComponent,
    DealershipComponent,
    FaqsComponent,
    GalleryComponent,
    NewsCenterComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
