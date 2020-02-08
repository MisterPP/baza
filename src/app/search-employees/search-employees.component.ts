import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.scss']
})
export class SearchEmployeesComponent implements OnInit {

  firstName: string;
  employees: Employee[];

  constructor( private empService: EmployeeService ) { }

  ngOnInit() {
    this.firstName = '';
  }

  private search() {
    this.employees = [];
    this.empService.getEmployeesByFirstName(this.firstName)
      .subscribe(employees => this.employees = employees);
  }

  onSubmit() {
    this.search();
  }

}
