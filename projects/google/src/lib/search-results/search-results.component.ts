import { Component } from '@angular/core';
import { searchResultItem } from '../search-form/search-result.type';
import { SearchService } from '../search-form/search.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  noResults = null; // TODO: add no results page
  results: searchResultItem[] | null = null;

  constructor(private search: SearchService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.results = data.searchResults?.items;
    });
  }
}
