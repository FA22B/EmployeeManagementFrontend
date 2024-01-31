import { Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "./app.auth";

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  //{ path: 'employee/editor', component: EmployeeEditorComponent, canActivate: [AuthGuard] },
  //{ path: 'employee/editor/:id', component: EmployeeEditorComponent, canActivate: [AuthGuard] },
  //{ path: 'employee/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
  //{ path: 'qualification/editor', component: QualificationEditorComponent, canActivate: [AuthGuard] },
  //{ path: 'qualification/:id', component: QualificationDetailsComponent, canActivate: [AuthGuard] },
  //{ path: 'qualification', component: QualificationListComponent, canActivate: [AuthGuard] },
];
