import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./Employee";
import {ValidationResult} from "./ValidationResult";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  public isEmployeeValid(employee: Employee): boolean {
    return this.getAllFieldValidationResults(employee).filter((result) => !result.valid).length == 0;
  }

  public getAllFieldValidationResults(employee: Employee): ValidationResult[] {
    const validationResults = [];
    for (const field of Employee.ALL_FIELDS) {
      validationResults.push(this.getFieldValidationResult(field, employee));
    }
    return validationResults;
  }

  public getFieldValidationResult(field: string, employee: Employee): ValidationResult {
    let validationResult: ValidationResult;
    switch (field) {
      case Employee.LAST_NAME_FIELD_NAME:
      case Employee.FIRST_NAME_FIELD_NAME:
      case Employee.STREET_FIELD_NAME:
      case Employee.CITY_FIELD_NAME:
      case Employee.PHONE_FIELD_NAME:
        validationResult = new ValidationResult().buildMandatoryStringValidator(
          this.getGuiRep(field),
          this.getFieldContent(field, employee)
        );
        break;
      case Employee.POSTCODE_FIELD_NAME:
        validationResult = new ValidationResult().buildMinMaxLengthValidator(
          this.getGuiRep(field),
          this.getFieldContent(field, employee),
          5,
          5
        );
        break;
      default:
        throw new Error('Invalid field identifier');
    }
    return validationResult;
  }

  private getGuiRep(field: string): string {
    let guiRep: string | undefined;
    switch (field) {
      case Employee.LAST_NAME_FIELD_NAME:
        guiRep = 'Nachname';
        break;
      case Employee.FIRST_NAME_FIELD_NAME:
        guiRep = 'Vorname';
        break;
      case Employee.STREET_FIELD_NAME:
        guiRep = 'Straße';
        break;
      case Employee.POSTCODE_FIELD_NAME:
        guiRep = 'Postleitzahl';
        break;
      case Employee.CITY_FIELD_NAME:
        guiRep = 'Stadt';
        break;
      case Employee.PHONE_FIELD_NAME:
        guiRep = 'Telefonnummer';
        break;
      default:
        throw new Error('Invalid field identifier');
    }
    return guiRep;
  }

  private getFieldContent(field: string, employee: Employee): string | undefined {
    let content: string | undefined;
    switch (field) {
      case Employee.LAST_NAME_FIELD_NAME:
        content = employee.lastName;
        break;
      case Employee.FIRST_NAME_FIELD_NAME:
        content = employee.firstName;
        break;
      case Employee.STREET_FIELD_NAME:
        content = employee.street;
        break;
      case Employee.POSTCODE_FIELD_NAME:
        content = employee.postcode;
        break;
      case Employee.CITY_FIELD_NAME:
        content = employee.city;
        break;
      case Employee.PHONE_FIELD_NAME:
        content = employee.phone;
        break;
      default:
        throw new Error('Invalid field identifier');
    }
    return content;
  }

  public async getEmployeeById(id: number): Promise<Employee> {
    return await firstValueFrom(
      this.http.get<Employee>(`/backend/employees/${id}`, {
        headers: this.getHeaders(),
      })
    );
  }

  private getHeaders(): HttpHeaders | { [header: string]: string | string[] } | undefined {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  public async deleteEmployee(id: number) {
    await firstValueFrom(this.http.delete(`/backend/employees/${id}`, { headers: this.getHeaders() }));
  }
}
