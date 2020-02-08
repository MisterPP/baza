import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  locations: Observable<Location[]>;


  constructor( private locService: LocationService ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.locations = this.locService.getLocationsList();
  }

}
