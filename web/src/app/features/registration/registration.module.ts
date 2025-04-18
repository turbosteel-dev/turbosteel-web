import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { IndividualHouseComponent } from './components/individual-house/individual-house.component';
import { ArchitectsEngineersComponent } from './components/architects-engineers/architects-engineers.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { MasonsBarbendersComponent } from './components/masons-barbenders/masons-barbenders.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    IndividualHouseComponent,
    ArchitectsEngineersComponent,
    DealershipComponent,
    MasonsBarbendersComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule
  ]
})
export class RegistrationModule { }
