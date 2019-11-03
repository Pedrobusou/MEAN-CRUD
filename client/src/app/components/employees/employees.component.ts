import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.readAll();
  }

  save(form: NgForm) {
    if (form.value._id)
      this.employeeService.update(form.value)
        .subscribe(() => this.saveSuccess(form));
    else
      this.employeeService.create(form.value)
        .subscribe(() => this.saveSuccess(form));
  }

  saveSuccess(form: NgForm) {
    this.resetForm(form);
    M.toast({ html: 'Employee saved!' });
    this.readAll();
  }

  readAll() {
    this.employeeService.readAll()
      .subscribe(res => { this.employeeService.items = res as Employee[] });
  }

  delete(_id: string) {
    if (confirm('Are you sure?')) {
      this.employeeService.delete(_id)
        .subscribe(res => {
          M.toast({ html: 'Employee Deleted!' });
          this.readAll();
        });
    }
  }

  resetForm(form: NgForm) {
    form.reset();
    this.employeeService.selectedEmployee = new Employee();
  }

  fillForm(item: Employee) {
    this.employeeService.selectedEmployee = item;
  }
}