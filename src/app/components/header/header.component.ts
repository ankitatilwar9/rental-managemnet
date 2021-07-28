import { Component, OnInit } from '@angular/core';
import catalogData from './../../catalog.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoriesList = [];

  selectedBranch: any = 'Select Branch';

  selectedLocation: any = '--Choose Location--';

  locations = catalogData.data.locations;

  branches: Array<any> = [];

  constructor() {}

  changeCountry() {
    console.log(this.selectedLocation);
    this.branches = this.locations.find(
      (item: any) => item.name == this.selectedLocation.name
    ).branches;
  }

  changeState() {
    const data = this.branches.find(
      (item: any) => item.name == this.selectedBranch.name
    );
    console.log('temp', data);
    this.categoriesList = data;
  }

  ngOnInit(): void {}
}
