import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SearchEmployeesComponent } from './search-employees/search-employees.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsListComponent } from './locations-list/locations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesListComponent,
    SearchEmployeesComponent,
    DepartmentsListComponent,
    DepartmentDetailsComponent,
    LocationDetailsComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
