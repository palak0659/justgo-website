import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Flight } from './flight.model';

@Injectable()
export class FlightService {
  selectedFlight: Flight;
  flights: Flight[];
  readonly baseURL = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) { }

  postFlight(fli: Flight) {
    return this.http.post(this.baseURL, fli);
  }

  getFlightList() {
    return this.http.get(this.baseURL);
  }

  putFlight(fli: Flight) {
    return this.http.put(this.baseURL + `/${fli._id}`, fli);
  }

  deleteFlight(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  
  viewFlight(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}