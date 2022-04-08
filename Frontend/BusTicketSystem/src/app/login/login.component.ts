import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageService } from '../manage.service';
import { user } from '../user-inf';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public mng: ManageService, public rout: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  userDetails: Array<user> = []

  login = new FormGroup({
    uid: new FormControl(),
    upwd: new FormControl,
    urole: new FormControl(),
  })

  checkUser() {
    let flag: Number = 0;
    this.userDetails.map(u => {
      if (this.login.value.uid == u.uid && this.login.value.upwd == u.pass) {
        flag = 1;
      }
    })
    if (flag == 1) {
      if (this.login.value.urole == "admin") {
        this.rout.navigate(['admin']);
        console.log("admin");
      }
      if (this.login.value.urole == "clerk") {
        this.rout.navigate(['clerk']);
        console.log("clerk");
      }
      if (this.login.value.urole == "driver") {
        this.rout.navigate(['driver']);
        console.log("driver");
      }
      if (this.login.value.urole == "passenger") {
        this.rout.navigate(['passenger']);
        console.log("passenger");
      }

    }
  }

  getUserData() {
    this.mng.getUserInf().subscribe(data => this.userDetails = data)
  }
}