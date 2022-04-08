import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus-inf';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent implements OnInit {
  busdata: Array<Bus> = [];
  constructor(public mng: ManageService) { }

  ngOnInit(): void {
    this.getBusDetails();
  }
  getBusDetails() {
    this.mng.getBusInf().subscribe(data => this.busdata = data);
  }
}
