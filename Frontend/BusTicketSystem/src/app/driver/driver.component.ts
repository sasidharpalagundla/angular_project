import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp-inf';
import { ManageService } from '../manage.service';
import { bRoute } from '../route-inf';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  empData: Array<Emp> = [];
  driverData: Array<Emp> = [];
  broute: Array<bRoute> = [];
  newbroute: Array<bRoute> = [];

  constructor(public mng: ManageService) { }

  ngOnInit(): void {
    this.getempdata();
    this.Getroutedata();
  }

  getempdata() {
    this.mng.getEmpInf().subscribe(data => this.empData = data);
    this.getdriverData();
  }
  getdriverData() {
    this.driverData = this.empData.filter(p => { return p.role === "driver" })
    this.getrouteofdriver();
  }
  getRouteDetails() {
    this.mng.getDataByRouteId().subscribe(data => this.broute = data)
  }
  Getroutedata() {
    this.mng.getRouteInf().subscribe(data => this.broute = data);
  }
  getrouteofdriver() {
    for (let i = 0; i < this.broute.length; i++) {
      if (this.driverData[0].routeId == this.broute[i].rid) {
        this.newbroute.push(this.broute[i]);
      }
    }
  }
}