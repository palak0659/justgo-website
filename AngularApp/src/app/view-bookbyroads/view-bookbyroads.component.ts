import { Component, OnInit } from '@angular/core';
import { ByroadService } from '../shared/byroad.service';
import { Byroad } from '../shared/byroad.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var M: any;
@Component({
  selector: 'app-view-bookbyroads',
  templateUrl: './view-bookbyroads.component.html',
  styleUrls: ['./view-bookbyroads.component.css'],
  providers: [ ByroadService]
})
export class ViewBookbyroadsComponent implements OnInit {
  _id: any;
  data:any;
  constructor(private route: ActivatedRoute, public byroadService: ByroadService ) { }
    
  
    
  
    ngOnInit() {
      this._id=this.route.snapshot.params['_id'];
   this.getOne();
     
    }
  
  
  getOne(){
    this.byroadService.viewFlight(this._id).subscribe(data =>{
      this.data=data;
      console.log(this.data)
    })
  }
    
  
  
}
