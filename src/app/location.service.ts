import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:9090/api/locations';

  constructor( private http: HttpClient ) { }

  getLocation(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getLocationsList() : Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
