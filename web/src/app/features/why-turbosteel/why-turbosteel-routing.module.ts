import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyTurbosteelComponent } from './why-turbosteel.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProductFeatureComponent } from './components/product-feature/product-feature.component';
import { CuttingEdgeTechnologyComponent } from './components/cutting-edge-technology/cutting-edge-technology.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ManufacturingProcessComponent } from './components/manufacturing-process/manufacturing-process.component';
import { InhouseLaboratoryComponent } from './components/inhouse-laboratory/inhouse-laboratory.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'certification',
        component: CertificationComponent
      },
      {
        path: 'product-features',
        component: ProductFeatureComponent
      },
      {
        path: 'cutting-edge-technology',
        component: CuttingEdgeTechnologyComponent
      },
      {
        path:'turbosteel-advantage',
        component: AdvantagesComponent
      },
      {
        path:'manufacturing-process',
        component: ManufacturingProcessComponent
      },
      {
        path:'in-house-labouratory',
        component: InhouseLaboratoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyTurbosteelRoutingModule { }
