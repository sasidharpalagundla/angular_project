import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Emp } from '../emp-inf';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showempdetails: boolean = false
  passengerdetails: boolean = false
  constructor(public mng: ManageService) { }

  ngOnInit(): void {

  }
  showemp() {
    if (this.showempdetails === true) {
      this.showempdetails = false
      return
    }
    this.showempdetails = true
  }
  showpass() {
    if (this.passengerdetails === true) {
      this.passengerdetails = false
      return
    }
    this.passengerdetails = true
  }
}

// eid: String,
// name: String,
// role: String,
// sal: Number,
// leaves: Number,
// status: String,
// routeId: String,