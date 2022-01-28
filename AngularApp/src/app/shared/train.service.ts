import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Train } from './train.model';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  selectedTrain: Train;
  trains: Train[];
  readonly baseURL = 'http://localhost:3000/trains';

  constructor(private http: HttpClient) { }

  postTrain(tr: Train) {
    return this.http.post(this.baseURL, tr);
  }

  getTrainList() {
    return this.http.get(this.baseURL);
  }

  putTrain(tr: Train) {
    return this.http.put(this.baseURL + `/${tr._id}`, tr);
  }

  deleteTrain(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  viewFlight(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}



