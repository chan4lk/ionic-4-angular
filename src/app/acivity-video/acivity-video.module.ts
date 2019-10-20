import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcivityVideoPage } from './acivity-video.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AcivityVideoPage],
  entryComponents: [AcivityVideoPage]
})
export class AcivityVideoPageModule {}
