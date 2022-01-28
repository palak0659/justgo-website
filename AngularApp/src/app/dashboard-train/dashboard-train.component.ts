import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainService } from '../shared/train.service';
import { Train } from '../shared/train.model';

declare var M: any;
@Component({
  selector: 'app-dashboard-train',
  templateUrl: './dashboard-train.component.html',
  styleUrls: ['./dashboard-train.component.css'],
  providers: [TrainService]
})
export class DashboardTrainComponent implements OnInit {

  searchText: any;
  constructor(public trainService: TrainService) { }

  ngOnInit() {
     this.resetForm();
    this. refreshTrainList() ;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.trainService.selectedTrain = {
      _id: "",
      From: "",
      Destination: "",
      TrainInformation: "",
      Price: "",
      DepartureTime: "",
      Duration: "",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.trainService.postTrain(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTrainList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
        else {
          this.trainService.putTrain(form.value).subscribe((res) => {
            this.resetForm(form);
            this.refreshTrainList();
            M.toast({ html: 'Updated successfully', classes: 'rounded' });
          });
        }
      }

  refreshTrainList() {
    this.trainService.getTrainList().subscribe((res) => {
      this.trainService.trains = res as Train[];
    });
  }

  onEdit(tr: Train) {
    this.trainService.selectedTrain = tr;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.trainService.deleteTrain(_id).subscribe((res) => {
        this. refreshTrainList() ;
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  sort(headerName:String){
    this.key = headerName;
  }
  key: String ='';
}

