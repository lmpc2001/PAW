import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

const baseUrl = 'http://localhost:3333/employees/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  getEmployee(filter: string): Observable<Employee> {
    return this.http.get<Employee>(baseUrl + '/search/' + filter)
  }

  createEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(baseUrl + '/create', JSON.stringify(employee), httpOptions)
  }

  updateEmployee(id:string, employee: Employee):Observable<Employee> {
    return this.http.put<Employee>(baseUrl + '/update/' + id, JSON.stringify(employee), httpOptions)
  }

  deleteEmployee(id:string):Observable<Employee> {
    return this.http.delete<Employee>(baseUrl + '/delete/' + id)
  }
}
