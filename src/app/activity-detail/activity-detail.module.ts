import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivityDetailPage } from './activity-detail.page';
import { AcivityVideoPageModule } from '../acivity-video/acivity-video.module';

const routes: Routes = [
  {
    path: '',
    component: ActivityDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AcivityVideoPageModule
  ],
  declarations: [ActivityDetailPage]
})
export class ActivityDetailPageModule {}
