import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { Employee } from '../employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor( private empService: EmployeeService, 
    private listComponent: EmployeesListComponent,
    private modalService: NgbModal ) { }

  ngOnInit() {
    console.log(this.employee);
  }

  open(content) {
    this.modalService.open(content);
  }

  update() {
    this.empService.updateEmployee(this.employee.employeeId, 
      { firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
        phoneNumber: this.employee.phoneNumber,
        hireDate: this.employee.hireDate,
        jobId: this.employee.jobId,
        salary: this.employee.salary,
        commissionPct: this.employee.commissionPct,
        managerId: this.employee.managerId,
        departmentId: this.employee.managerId })
        .subscribe(
          data => {
            console.log(data);
            this.employee = data as Employee;
          },
          error => console.log(error));
  }
  
  deleteEmployee() {
    this.empService.deleteEmployee(this.employee.employeeId)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error));
  }

}
