import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SearchEmployeesComponent } from './search-employees/search-employees.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeesListComponent },
  { path: 'department', component: DepartmentsListComponent },
  { path: 'location', component: LocationsListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'findbyfirstname', component: SearchEmployeesComponent },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
