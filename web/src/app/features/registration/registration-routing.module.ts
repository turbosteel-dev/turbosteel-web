import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualHouseComponent } from './components/individual-house/individual-house.component';
import { ArchitectsEngineersComponent } from './components/architects-engineers/architects-engineers.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { MasonsBarbendersComponent } from './components/masons-barbenders/masons-barbenders.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'individual-house',
        component: IndividualHouseComponent
      },
      {
        path: 'architects-and-engineers',
        component: ArchitectsEngineersComponent
      },
      {
        path: 'dealership',
        component: DealershipComponent
      },
      {
        path: 'masons-and-barbenders',
        component: MasonsBarbendersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
