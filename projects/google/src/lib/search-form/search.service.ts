import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, map } from 'rxjs/operators';
import { searchResultItem, searchResults } from './search-result.type';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public term$: Subject<string> = new Subject<string>();

  public results$: Observable<searchResultItem[]> = this.term$.pipe(
    switchMap(term => this.query(term).pipe(
      takeUntil(this.results$),
      map(results => results.items)
    ))
  );

  constructor(private http: HttpClient) {}

  private query(term: string): Observable<searchResults> {
    // TODO: inject baseURL 
      return this.http.get<searchResults>(`/api/google?q=${term.split(' ').join('+')}`);
    }
}
