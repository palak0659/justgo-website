import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../shared/flight.service';
import { Flight } from '../shared/flight.model';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
  providers: [FlightService]
})
export class ViewBookComponent implements OnInit {
_id: any;
data:any;
constructor(private route: ActivatedRoute, public flightService: FlightService ) { }
  

  

  ngOnInit() {
    this._id=this.route.snapshot.params['_id'];
 this.getOne();
   
  }


getOne(){
  this.flightService.viewFlight(this._id).subscribe(data =>{
    this.data=data;
    console.log(this.data)
  })
}
  


}

