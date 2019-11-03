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

  create(form: NgForm) {
    console.log(form.value);
    this.employeeService.create(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({ html: 'Employee created!' });
      });
  }

  readAll() {
    this.employeeService.readAll()
      .subscribe(res => {
        console.log(res);
        this.employeeService.items = res as Employee[];
      });
  }

  resetForm(form: NgForm) {
    form.reset();
    this.employeeService.selectedEmployee = new Employee();
  }
}