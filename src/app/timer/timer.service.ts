import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private URL= 'http://localhost:3000/timer';

  constructor(private http : HttpClient) { }


stopTimer(this: any, timerValues: { hours: number; minutes: number; seconds: number }): Observable<any> {
  return this.http.post(`http://localhost:3000/timer/stop`, timerValues);
  }
}