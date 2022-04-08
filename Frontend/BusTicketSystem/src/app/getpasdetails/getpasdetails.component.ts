import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { Pass } from '../pass-inf';

@Component({
  selector: 'app-getpasdetails',
  templateUrl: './getpasdetails.component.html',
  styleUrls: ['./getpasdetails.component.css']
})
export class GetpasdetailsComponent implements OnInit {
  passdetails: Array<Pass> = []
  constructor(public mng: ManageService) { }

  ngOnInit(): void {
    this.getPassDetails();
  }
  getPassDetails() {
    this.mng.getPassInf().subscribe(data => this.passdetails = data);
  }
}
