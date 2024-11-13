import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Miami",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      name: "Sunset View Apartments",
      city: "Chicago",
      state: "FL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 3,
      wifi: true,
      laundry: true,
    },
    {
      name: "Mountain Ridge Residences",
      city: "Denver",
      state: "CO",
      photo: "../assets/housing-2.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      name: "Harbor Heights Housing",
      city: "Seattle",
      state: "WA",
      photo: "../assets/housing-3.jpg",
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
    {
      name: "Urban Oasis Apartments",
      city: "Miami",
      state: "TX",
      photo: "../assets/housing-1.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      name: "Garden View Complex",
      city: "Chicago",
      state: "OR",
      photo: "../assets/housing-2.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: true,
    }
  ];

  selectedLocation: HousingLocation | undefined;// = this.housingLocationList[0];

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
