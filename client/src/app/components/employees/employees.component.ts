import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

  }

  create(form: NgForm) {
    console.log(form.value);
    this.employeeService.create(form.value)
      .subscribe(res => {
        console.log(res);
      });
  }

  resetForm(form: NgForm) {
    form.reset();
    this.employeeService.selectedEmployee = new Employee();
  }
}