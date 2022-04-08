import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp-inf';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-getempdata',
  templateUrl: './getempdata.component.html',
  styleUrls: ['./getempdata.component.css']
})
export class GetempdataComponent implements OnInit {
  empdata: Array<Emp> = [];
  constructor(public mng: ManageService) { }

  ngOnInit(): void {
    this.getempdata();
  }
  getempdata() {
    this.mng.getEmpInf().subscribe(data => this.empdata = data);
  }
  deleteemp(emp: Emp) {
    console.log(emp.eid);
    this.empdata = this.empdata.filter(e => {
      return e.eid != emp.eid;
    })
    this.mng.deleteemp(emp).subscribe();
  }

}