import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activity$: Observable<Activity>;
  constructor(
    activityService: ActivityService,
    route: ActivatedRoute
  ) {
    // tslint:disable-next-line: no-string-literal
    const id = route.snapshot.params['id'];
    this.activity$ = activityService.getActivity(id);
   }

  ngOnInit() {
  }

}
