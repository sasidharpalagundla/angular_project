import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Bus } from '../bus-inf';

@Component({
  selector: 'app-get-bus-details',
  templateUrl: './get-bus-details.component.html',
  styleUrls: ['./get-bus-details.component.css']
})
export class GetBusDetailsComponent implements OnInit {
  busDetails: Array<Bus> = [];
  constructor(public mng: ManageService) { }

  ngOnInit(): void {
    this.getBusDetails()
  }
  Busdata = new FormGroup({
    bid: new FormControl(),
    bfrom: new FormControl(),
    bto: new FormControl(),
    btype: new FormControl(),
    bcap: new FormControl(),
    bdriver: new FormControl(),
    bclerk: new FormControl(),
  })

  businsert() {
    let bus = {
      bid: this.Busdata.value.bid,
      from: this.Busdata.value.bfrom,
      to: this.Busdata.value.bto,
      type: this.Busdata.value.btype,
      cap: this.Busdata.value.bcap,
      date: new Date(),
      driver: this.Busdata.value.bdriver,
      clerk: this.Busdata.value.bclerk
    }
    this.mng.insertBusData(bus).subscribe(() => { }, () => { }, () => { console.log("Data Inserted") });
  }

  getBusDetails() {
    this.mng.getBusInf().subscribe(data => this.busDetails = data);
  }
  updateBus(bus: Bus) {
    let bid = bus.bid;
    let bfrom = bus.from;
    let bto = bus.to;
    let btype = bus.type;
    let bcap = bus.cap;
    let bdate = new Date();
    let bdriver = bus.driver;
    let bclerk = bus.clerk;



  }

}
// return this.mng.updateBus(bus).subscribe();