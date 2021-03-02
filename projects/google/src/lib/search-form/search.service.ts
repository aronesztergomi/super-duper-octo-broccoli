import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { searchResults } from './search-result.type';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) {}

  public query(params: Params): Observable<searchResults> {
    return this.http.get<searchResults>(`${this.apiUrl}/api/google?q=${params.q}`);
  }

  public setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}
