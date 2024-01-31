import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/backend/employees', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
}
