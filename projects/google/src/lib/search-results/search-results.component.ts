import { Component } from '@angular/core';
import { searchInformation, searchQueries, searchQuery, searchResultItem } from '../search-form/search-result.type';
import { SearchService } from '../search-form/search.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  noResults = false;
  results: searchResultItem[] | null = null;
  information: searchInformation | null = null;
  startIndex = 0;
  searchTerms = '';
  queries!: searchQueries;
  request!: searchQuery;

  constructor(private search: SearchService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if ( !(data.searchResults?.queries?.request?.length > 0) ) {
        return;
      }

      this.queries = data.searchResults?.queries;
      this.request = this.queries.request[0];
      this.information = data.searchResults?.searchInformation;
      this.startIndex = Math.floor(this.request.startIndex / this.request.count );
      this.searchTerms = this.request.searchTerms;
      this.results = data.searchResults?.items;

      this.noResults = !this.results;
    });
  }
}
