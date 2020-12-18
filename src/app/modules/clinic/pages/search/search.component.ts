import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public clinicList: Array<Select2OptionData> = new Array<Select2OptionData>();
  public regionList: Array<Select2OptionData> = new Array<Select2OptionData>();
  constructor() {}
  ngOnInit(): void {
    this.clinicList = [
      {
        id: '1',
        text: 'Basic 1',
      },
      {
        id: 'basi2',
        text: 'Basic 2',
      },
      {
        id: '3',
        text: 'Basic 3',
      },
      {
        id: '4',
        text: 'Basic 4',
      },
    ];
    this.regionList = [
      {
        id: '1',
        text: 'Mayagüez',
      },
      {
        id: 'basi2',
        text: 'Bayamón',
      },
      {
        id: '3',
        text: 'Basic 3',
      },
      {
        id: '4',
        text: 'Basic 4',
      },
    ];
  }
}
