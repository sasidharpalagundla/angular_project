import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClerkComponent } from './clerk/clerk.component';
import { DpageComponent } from './dpage/dpage.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { PassComponent } from './pass/pass.component';
import { PpageComponent } from './ppage/ppage.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "passenger", component: PpageComponent },
  { path: "driver", component: DpageComponent },
  { path: "clerk", component: ClerkComponent },
  { path: "admin", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
