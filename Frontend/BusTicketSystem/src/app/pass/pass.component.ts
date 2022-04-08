import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ManageService } from '../manage.service';
import { Pass } from '../pass-inf';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  constructor(public mng: ManageService) { }
  passdetails: Array<Pass> = [];
  pid: String = "";
  pname: String = "";
  ploc: String = "";
  from: String = "";
  to: String = "";
  seat: Number = 0;

  ngOnInit(): void {
    this.getPassDetails();
  }

  addpass = new FormGroup({
    pid: new FormControl(),
    pname: new FormControl(),
    page: new FormControl(),
    ploc: new FormControl(),
    pfrom: new FormControl(),
    pto: new FormControl(),
    pseat: new FormControl(),
  })

  bookticket() {
    let addpass = {
      pid: this.addpass.value.pid,
      name: this.addpass.value.pname,
      age: this.addpass.value.page,
      loc: this.addpass.value.ploc,
      from: this.addpass.value.pfrom,
      to: this.addpass.value.pto,
      seat: this.addpass.value.pseat,
      date: new Date(),
    }
    return this.mng.bookticket(addpass).subscribe();
  }

  updatesend(pass: Pass) {
    this.pid = pass.pid,
      this.pname = pass.name,
      this.ploc = pass.loc,
      this.from = pass.from,
      this.to = pass.to,
      this.seat = pass.seat
  }

  updatep() {
    let data = {
      pid: this.addpass.value.pid,
      name: this.addpass.value.pname,
      age: this.addpass.value.page,
      loc: this.addpass.value.ploc,
      from: this.addpass.value.pfrom,
      to: this.addpass.value.pto,
      seat: this.addpass.value.pseat,
      date: new Date(),
    }
    return this.mng.updatepass(data).subscribe();
  }

  getPassDetails() {
    this.mng.getPassInf().subscribe(data => this.passdetails = data);
  }

}