import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';


@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule,
    SharedModule
  ]
})
export class BuyModule { }
