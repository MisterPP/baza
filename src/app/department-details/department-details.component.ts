import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { DepartmentsListComponent } from '../departments-list/departments-list.component';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  @Input() department: Department;

  constructor( private listComponent: DepartmentsListComponent ) { }

  ngOnInit() {
    console.log(this.department);
  }

}
