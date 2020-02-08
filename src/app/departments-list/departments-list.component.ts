import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {

  departments: Observable<Department[]>;

  constructor( private depService: DepartmentService ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.departments = this.depService.getDepartmentsList();
  }

}
