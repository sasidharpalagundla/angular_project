import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-b-route',
  templateUrl: './b-route.component.html',
  styleUrls: ['./b-route.component.css']
})
export class BRouteComponent implements OnInit {

  constructor(public mng: ManageService) { }

  ngOnInit(): void {
  }

  addroute = new FormGroup({
    rid: new FormControl(),
    rform: new FormControl(),
    rto: new FormControl(),
  })
  routeinsert() {
    let route = {
      rid: this.addroute.value.rid,
      from: this.addroute.value.rfrom,
      to: this.addroute.value.rto

    }
    console.log("Route")
    this.mng.insertroute(route).subscribe(() => { }, () => { }, () => { console.log("Data Inserted") });
  }
  // rid: String,
  // from: String,
  // to: String,

}

