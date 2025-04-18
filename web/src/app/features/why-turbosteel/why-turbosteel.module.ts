import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WhyTurbosteelRoutingModule } from './why-turbosteel-routing.module';
import { WhyTurbosteelComponent } from './why-turbosteel.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProductFeatureComponent } from './components/product-feature/product-feature.component';
import { CuttingEdgeTechnologyComponent } from './components/cutting-edge-technology/cutting-edge-technology.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ManufacturingProcessComponent } from './components/manufacturing-process/manufacturing-process.component';
import { InhouseLaboratoryComponent } from './components/inhouse-laboratory/inhouse-laboratory.component';


@NgModule({
  declarations: [
    WhyTurbosteelComponent,
    CertificationComponent,
    ProductFeatureComponent,
    CuttingEdgeTechnologyComponent,
    AdvantagesComponent,
    ManufacturingProcessComponent,
    InhouseLaboratoryComponent
  ],
  imports: [
    CommonModule,
    WhyTurbosteelRoutingModule,
    SharedModule
  ]
})
export class WhyTurbosteelModule { }
