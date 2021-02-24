import { Component } from '@angular/core';
import { SearchService } from '../search-form/search.service';

@Component({
  selector: 'lib-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  results$ = this.search.results$;

  constructor(private search: SearchService) {}
}
