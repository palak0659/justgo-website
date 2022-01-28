import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TrainService } from '../shared/train.service';
import { Train } from '../shared/train.model';

declare var M: any;
@Component({
  selector: 'app-view-booktrains',
  templateUrl: './view-booktrains.component.html',
  styleUrls: ['./view-booktrains.component.css'],
  providers: [TrainService]
})
export class ViewBooktrainsComponent implements OnInit {

  _id: any;
  data:any;
  constructor(private route: ActivatedRoute, public trainService: TrainService ) { }
    
  
    
  
    ngOnInit() {
      this._id=this.route.snapshot.params['_id'];
   this.getOne();
     
    }
  
  
  getOne(){
    this.trainService.viewFlight(this._id).subscribe(data =>{
      this.data=data;
      console.log(this.data)
    })
  }
    
  
}
