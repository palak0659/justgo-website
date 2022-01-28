import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from './contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedFlight:Contact;
  flights: Contact[];
  readonly baseURL = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  postFlight(fli: Contact) {
    return this.http.post(this.baseURL, fli);
  }

  getFlightList() {
    return this.http.get(this.baseURL);
  }

  putFlight(fli:Contact) {
    return this.http.put(this.baseURL + `/${fli._id}`, fli);
  }

  deleteFlight(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  
}


