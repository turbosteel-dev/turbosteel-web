import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { ChairmanMessageComponent } from './components/chairman-message/chairman-message.component';
import { ErmOverviewComponent } from './components/erm-overview/erm-overview.component';
import { CsrComponent } from './components/csr/csr.component';
import { MediaComponent } from './components/media/media.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: 'mission-vision',
        component: MissionVisionComponent
      },
      {
        path: 'chairman-message',
        component: ChairmanMessageComponent
      },
      {
        path: 'erm-overview',
        component: ErmOverviewComponent
      },
      {
        path: 'csr',
        component: CsrComponent 
      },
      {
        path: 'media',
        component: MediaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
