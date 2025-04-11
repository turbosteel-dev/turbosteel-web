import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { ChairmanMessageComponent } from './components/chairman-message/chairman-message.component';
import { ErmOverviewComponent } from './components/erm-overview/erm-overview.component';
import { MediaComponent } from './components/media/media.component';
import { CsrComponent } from './components/csr/csr.component';


@NgModule({
  declarations: [
    AboutComponent,
    MissionVisionComponent,
    ChairmanMessageComponent,
    ErmOverviewComponent,
    MediaComponent,
    CsrComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
