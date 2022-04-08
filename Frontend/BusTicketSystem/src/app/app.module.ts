import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { BRouteComponent } from './b-route/b-route.component';
import { EmpComponent } from './emp/emp.component';
import { PassComponent } from './pass/pass.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetempdataComponent } from './getempdata/getempdata.component';
import { GetpasdetailsComponent } from './getpasdetails/getpasdetails.component';
import { ClerkComponent } from './clerk/clerk.component';
import { GetBusDetailsComponent } from './get-bus-details/get-bus-details.component';
import { LoginComponent } from './login/login.component';
import { DriverComponent } from './driver/driver.component';
import { DpageComponent } from './dpage/dpage.component';
import { PpageComponent } from './ppage/ppage.component';

@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    BRouteComponent,
    EmpComponent,
    PassComponent,
    AdminComponent,
    GetempdataComponent,
    GetpasdetailsComponent,
    ClerkComponent,
    GetBusDetailsComponent,
    LoginComponent,
    DriverComponent,
    DpageComponent,
    PpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
