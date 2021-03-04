import {Component, Input, OnInit} from '@angular/core';
import {searchInformation} from '../search-form/search-result.type';

@Component({
  selector: 'lib-search-information',
  templateUrl: './search-information.component.html',
  styleUrls: ['./search-information.component.css']
})
export class SearchInformationComponent implements OnInit {
  @Input() information!: searchInformation;
  @Input() pageNumber = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.information);
  }

}
