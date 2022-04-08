import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bus } from '../bus-inf';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  busDetails: Array<Bus> = []
  constructor(public mng: ManageService) { }

  ngOnInit(): void {
  }
  Busdata = new FormGroup({
    bid: new FormControl(),
    bfrom: new FormControl(),
    bto: new FormControl(),
    brid: new FormControl(),
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
      brid: this.Busdata.value.brid,
      cap: this.Busdata.value.bcap,
      date: new Date(),
      driver: this.Busdata.value.bdriver,
      clerk: this.Busdata.value.bclerk
    }
    this.mng.insertBusData(bus).subscribe(() => { }, () => { }, () => { console.log("Data Inserted") });
  }

}

// bid: String,
// from: String,
// to: String,
// type: String,
// cap: Number,
// date: Date,
// driver: String,
// clerk: String