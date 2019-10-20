import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AcivityVideoPage } from '../acivity-video/acivity-video.page';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activity$: Observable<Activity>;
  constructor(
    private modelController: ModalController,
    activityService: ActivityService,
    route: ActivatedRoute
  ) {
    // tslint:disable-next-line: no-string-literal
    const id = route.snapshot.params['id'];
    this.activity$ = activityService.getActivity(id);
   }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modelController.create({
      component: AcivityVideoPage
    });

    return await this.activity$.subscribe(activity => {
      modal.componentProps = {
        videoURL: activity.video_url
      };

      return modal.present();
    });
  }

}
