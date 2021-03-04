import {Component, Input, OnChanges} from '@angular/core';
import {searchQueries, searchQuery} from '../search-form/search-result.type';

interface pageItem {
  index: number;
  count: number;
  param: number;
}

@Component({
  selector: 'lib-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnChanges {
  @Input() queries!: searchQueries;
  @Input() searchTerms!: string;
  @Input() next: pageItem | null = null;
  @Input() previous: pageItem | null = null;
  pages: pageItem[] = [];
  current: pageItem | null = null;

  constructor() {}


  ngOnChanges(): void {
    console.log('ngOnChanges');
    if ( !( this.queries?.request?.length > 0 ) ) {
      return;
    }

    this.next = this.getPageItemByQuery(this.queries.nextPage);
    this.previous = this.getPageItemByQuery(this.queries.previousPage);
    this.current = this.getPageItemByQuery(this.queries.request) as pageItem;

    const totalResults = Number(this.queries.request[0].totalResults);

    const startPage = this.current.index < 5 ? 0 : this.current.index - 5;
    const pages: pageItem[] = [];
    const maxPage = totalResults / this.current.count;

    for ( let i = startPage; i < Math.min(startPage + 10, maxPage); i++ ) {
      pages.push({ index: i, count: this.current.count, param: i * this.current.count + 1 });
    }

    this.pages = pages;
  }

  getPageItemByQuery(query: searchQuery[]): pageItem | null {
    if ( query?.length > 0 ) {
      const queryItem = query[0];
      return {
        index: Math.floor(queryItem.startIndex / queryItem.count),
        count: queryItem.count,
        param: queryItem.startIndex
      };
    }

    return null;
  }
}
