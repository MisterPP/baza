import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:9090/api/departments';

  constructor( private http: HttpClient ) { }

  getDepartment(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getDepartmentsList() : Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
