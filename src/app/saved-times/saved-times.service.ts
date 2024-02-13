import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timerValues } from '../timer';

@Injectable({
  providedIn: 'root'
})
export class SavedTimesService {

  private URL= 'http://localhost:3000/timer';

  constructor(private http : HttpClient) { }

  getSavedTimers(){
    return this.http.get('http://localhost:3000/timer');
  }

  deleteSavedTimer(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/timer/${id}`);
  }


  }

