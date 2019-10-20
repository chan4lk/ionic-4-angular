import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './models/Activity';

const API = 'https://orangevalleycaa.org/api/videos';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivity(id: string): Observable<Activity> {
    return this.httpClient.get<Activity>(API + '/id/' + id);
  }

  getAllActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(API);
  }
}
