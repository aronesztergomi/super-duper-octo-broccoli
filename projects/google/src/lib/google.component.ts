import { Component, OnInit } from '@angular/core';
import { searchResults } from './search-form/search-result.type';

@Component({
  selector: 'lib-google',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class GoogleComponent implements OnInit {
  results!: searchResults;

  constructor() {}

  ngOnInit(): void {}
}
