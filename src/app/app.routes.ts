import { Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeEditorComponent} from "./employee-editor/employee-editor.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {QualificationEditorComponent} from "./qualification-editor/qualification-editor.component";
import {QualificationDetailsComponent} from "./qualification-details/qualification-details.component";
import {QualificationListComponent} from "./qualification-list/qualification-list.component";
import {AuthGuard} from "./security/app.auth";

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employee/editor', component: EmployeeEditorComponent, canActivate: [AuthGuard] },
  { path: 'employee/editor/:id', component: EmployeeEditorComponent, canActivate: [AuthGuard] },
  { path: 'employee/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'qualification/editor', component: QualificationEditorComponent, canActivate: [AuthGuard] },
  { path: 'qualification/:id', component: QualificationDetailsComponent, canActivate: [AuthGuard] },
  { path: 'qualification', component: QualificationListComponent, canActivate: [AuthGuard] },
];
