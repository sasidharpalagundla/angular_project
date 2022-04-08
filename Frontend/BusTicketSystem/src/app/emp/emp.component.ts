import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(public mng: ManageService) { }

  ngOnInit(): void {
  }

  addemp = new FormGroup({
    eid: new FormControl(),
    ename: new FormControl(),
    erole: new FormControl(),
    esal: new FormControl(),
    eleaves: new FormControl(),
    estatus: new FormControl(),
    erouteId: new FormControl()
  })

  empinsert() {
    let Emp = {
      eid: this.addemp.value.eid,
      name: this.addemp.value.ename,
      role: this.addemp.value.erole,
      sal: this.addemp.value.esal,
      leaves: this.addemp.value.eleaves,
      status: this.addemp.value.estatus,
      routeId: this.addemp.value.erouteId,

    }
    console.log("chill");
    this.mng.insertempdata(Emp).subscribe();
  }

}