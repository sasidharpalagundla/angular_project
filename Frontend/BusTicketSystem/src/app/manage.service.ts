import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../app/bus-inf';
import { bRoute } from './route-inf';
import { Emp } from './emp-inf';
import { Pass } from './pass-inf';
import { user } from './user-inf';

@Injectable({
  providedIn: 'root'
})

export class ManageService {

  busUrl = "http://localhost:9090/findAllBus"

  routrUrl = "http://localhost:9090/findAllRoutes"

  empUrl = "http://localhost:9090/findAllEmp"

  passUrl = "http://localhost:9090/findAllPass"

  userUrl = "http://localhost:9090/findAllUser"

  deletemp = "http://localhost:9090/deleteEmp";

  updatebus = "http://localhost:9090/updateBus"


  constructor(public http: HttpClient) { }

  deleteemp(emp: Emp): Observable<any> {
    return this.http.delete("http://localhost:9090/deleteEmp/" + emp.eid, { responseType: 'text' });
  }

  getBusInf(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.busUrl)
  }

  updateBus(bus: Bus): Observable<any> {
    return this.http.put("http://localhost:9090/updateBus/" + bus.bid, { responseType: 'text' })
  }

  insertBusData(busdata: Bus): Observable<any> {
    return this.http.post("http://localhost:9090/storeBus", busdata)
  }

  getRouteInf(): Observable<bRoute[]> {
    return this.http.get<bRoute[]>(this.routrUrl)
  }

  getEmpInf(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.empUrl)
  }

  insertempdata(emp: Emp): Observable<any> {
    return this.http.post("http://localhost:9090/storeEmp", emp)
  }

  insertroute(route: bRoute): Observable<any> {
    return this.http.post("http://localhost:9090/storeRoute", route)
  }

  getPassInf(): Observable<Pass[]> {
    return this.http.get<Pass[]>(this.passUrl)
  }

  bookticket(ticket: Pass): Observable<any> {
    return this.http.post("http://localhost:9090/storePass", ticket)
  }

  updatepass(pass: Pass) {
    return this.http.put("http://localhost:9090/updatePass", pass);
  }

  insertUser(user: user) {
    return this.http.post("http://localhost:9090/storeUser", user)
  }

  getUserInf(): Observable<user[]> {
    return this.http.get<user[]>(this.userUrl)
  }

  getDataByRouteId(): Observable<bRoute[]> {
    return this.http.get<bRoute[]>("http://localhost:9090/findRouteById")
  }

}
