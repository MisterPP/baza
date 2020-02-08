import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { LocationsListComponent } from '../locations-list/locations-list.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  constructor( private listComponent: LocationsListComponent) { }

  ngOnInit() {
    console.log(this.location);
  }

}
