import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly API_URL = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee;
  items: Employee[];

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  /**
   * Create employee using API
   * @param item {Employee}
   */
  create(item: Employee) {
    return this.http.post(this.API_URL, item);
  }

  readAll() {
    return this.http.get(this.API_URL);
  }

  update(item: Employee) {
    return this.http.put(`${this.API_URL}/${item._id}`, item);
  }

  delete(_id: string) {
    return this.http.delete(`${this.API_URL}/${_id}`);
  }
}
