import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9090/api/employees';

  constructor( private http: HttpClient ) { }

  getEmployee(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: any) : Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(id: number, value: any) : Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getEmployeesList() : Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEmployeesByFirstName(name: string) : Observable<any> {
    return this.http.get(`${this.baseUrl}/firstName/${name}`); 
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
