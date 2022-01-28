import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

declare var M: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  
  constructor(public contactService: ContactService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshFlightList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.contactService.selectedFlight = {
      _id: "",
    Name: "",
      Email: "",
      Message: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.contactService.postFlight(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFlightList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.contactService.putFlight(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshFlightList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshFlightList() {
    this.contactService.getFlightList().subscribe((res) => {
      this.contactService.flights = res as Contact[];
    });
  }

  onEdit(fli:Contact) {
    this.contactService.selectedFlight = fli;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.contactService.deleteFlight(_id).subscribe((res) => {
        this. refreshFlightList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}


