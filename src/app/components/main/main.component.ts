import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() categoriesList: any;
  subCategoriesList = [];
  displayCategoryFlag = true;
  displaySubCategoryFlag = false;
  imageCategory = 'assets/';
  imageSubcategory = 'assets/subcategory/';

  constructor() {}

  ngOnInit(): void {
    console.log('categoriesList', this.categoriesList);
  }

  onImageClick(event) {
    this.displayCategoryFlag = false;
    this.displaySubCategoryFlag = true;
    console.log('onImageClick', event);
    this.subCategoriesList = event;
  }

  onCatalogClicked() {
    this.displayCategoryFlag = true;
    this.displaySubCategoryFlag = false;
  }
}
