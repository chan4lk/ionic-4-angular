import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  activities$: Observable<Activity[]>;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    setTimeout(() => {
      this.activities$ = this.activityService.getAllActivities();
    }, 3000);
  }


}
