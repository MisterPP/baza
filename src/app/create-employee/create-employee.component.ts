import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor( private empService: EmployeeService ) { }

  ngOnInit() {
  }

  newEmployee() : void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.empService.createEmployee(this.employee)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
  }

  onSubmit() {
    this.save();
  }

}
