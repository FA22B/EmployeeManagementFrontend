import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable, of} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Employee} from "../Employee";
import {appConfig} from "../app.config";
import {EmployeeListService} from "./employee-list.service";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  //bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE3MDY2OTE3ODIsImlhdCI6MTcwNjY4ODE4MiwianRpIjoiZTA2OTkxZjUtZmFjNy00ZjllLTgxZjYtMjcxYjk3MTIxOThmIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJlMWU4MWU2ZC00MTU1LTRjYzctYjdlNi1lZmM5YjA5YWNkMTgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicHJvZHVjdF9vd25lciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.feHymOtGVKpsO0WdUOfnkjOqNp53Bn480nA-3HvhGAno1qEoz81kjsfbtVJ24T5Z2Hr7v1QTPyjMWM3jHBxyhSSnyJcL2UnUdnl-Z-Tg3CnOHEBlDVVDDIqALWLk7LCSuE6hRyI2kIcr9eIvdjUXLLDlrETdBWTUFOqC3tcD3yQ-ealFl1spxqb-pgw8LECSjdC_MYxKfQvfstkGMZdmrLG7-WTkwHUiC5hf7J0fJT32yeiqpaqJRbaVJA6BpE9dgjMX0ozigaJ9yy7CqpwY5fpmKuV3TU_eJLhreM09BI-MDhqJa9K1NpKpvSq9Va5dQw6zusFlLGx8GaOl9icOng';
  employees$: Observable<Employee[]>;

  constructor(private service: EmployeeListService/*private http: HttpClient*/) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
<<<<<<< HEAD
    //var bearer =
    this.employees$ = this.service.getEmployees();
    /*this.employees$ = this.http.get<Employee[]>('/backend', {
=======
    this.employees$ = this.http.get<Employee[]>('/backend/employees', {
>>>>>>> ab6ddbd286c1a6b9efddcc6f01fdd4316004a9aa
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        //.set('Authorization', `Bearer ${this.bearer}`)
    });*/
  }
}
