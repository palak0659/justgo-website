import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Byroad } from './byroad.model';
@Injectable({
  providedIn: 'root'
})
export class ByroadService {
  selectedByroad: Byroad;
  Byroads: Byroad[];
  readonly baseURL = 'http://localhost:3000/byroads';

  constructor(private http: HttpClient) { }

  postByroad(road: Byroad) {
    return this.http.post(this.baseURL, road);
  }

  getByroadList() {
    return this.http.get(this.baseURL);
  }

  putFlight(road: Byroad) {
    return this.http.put(this.baseURL + `/${road._id}`, road);
  }

  deleteFlight(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  viewFlight(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
}

