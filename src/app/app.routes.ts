import { Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "./app.auth";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard] },
];
