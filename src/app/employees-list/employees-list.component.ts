import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor( private empService: EmployeeService ) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteEmployees() {
    this.empService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.employees = this.empService.getEmployeesList();
  }
}
