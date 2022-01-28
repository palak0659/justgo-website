import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ByroadService } from '../shared/byroad.service';
import { Byroad } from '../shared/byroad.model';
declare var M: any;
@Component({
  selector: 'app-dashboard-byroad',
  templateUrl: './dashboard-byroad.component.html',
  styleUrls: ['./dashboard-byroad.component.css'],
  providers: [ByroadService]
})
export class DashboardByroadComponent implements OnInit {
  key: String ='';
  searchText: any;
  constructor(public byroadService: ByroadService) { }

  ngOnInit() {
     this.resetForm();
    this.  refreshByroadList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.byroadService.selectedByroad = {
      _id: "",
      From: "",
      Destination: "",
      CarInformation: "",
      Price: "",
      DepartureTime: "",
      Duration: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.byroadService.postByroad(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshByroadList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.byroadService.putFlight(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshByroadList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshByroadList() {
    this.byroadService.getByroadList().subscribe((res) => {
      this.byroadService.Byroads = res as Byroad[];
    });
  }

  onEdit(road: Byroad) {
    this.byroadService.selectedByroad = road;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.byroadService.deleteFlight(_id).subscribe((res) => {
        this. refreshByroadList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  sort(headerName:String){
    this.key = headerName;
  }
}
