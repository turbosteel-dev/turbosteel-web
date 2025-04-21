import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { BuyBannerComponent } from './components/buy-banner/buy-banner.component';
import { BuyFormComponent } from './components/buy-form/buy-form.component';
import { MapToUniquePipe } from 'src/app/pipes/map-to-unique.pipe';

@NgModule({
  declarations: [
    BuyComponent,
    BuyBannerComponent,
    BuyFormComponent,
    MapToUniquePipe
  ],
  imports: [
    CommonModule,
    BuyRoutingModule,
    SharedModule
  ]
})
export class BuyModule { }
