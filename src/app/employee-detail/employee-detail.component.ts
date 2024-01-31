import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeService} from "../employee.service";
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../Employee";
import {HistoryService} from "../history.service";

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | undefined;
  id: number | undefined;
  found = true;
  showSaveSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private historyService:  HistoryService
  ) {}

  ngOnInit(): void {
    this.getRequiredDataFromParams();
    if (this.id != undefined) {
      this.fetchEmployee(this.id);
    }
  }

  private getRequiredDataFromParams() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    const routeQueries = this.route.snapshot.queryParamMap;
    if (routeQueries.has('saveSuccess')) {
      this.showSaveSuccess = routeQueries.get('saveSuccess') === 'true';
    }
  }

  private fetchEmployee(id: number) {
    this.employeeService
      .getEmployeeById(id)
      .then((employee) => (this.employee = employee))
      .catch(() => (this.found = false));
  }

  editEmployee() {

  }

  deleteEmployee(id: number | undefined) {
    if (id != undefined) {
      this.employeeService.deleteEmployee(id).then(() => this.goBack());
    }
  }

  goBack(): void {
    this.historyService.goBack();
  }

}
