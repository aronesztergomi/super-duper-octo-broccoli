import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { searchResults } from './search-form/search-result.type';
import { SearchService } from './search-form/search.service';


@Injectable({
  providedIn: 'root'
})
export class GoogleRouteResolverService implements Resolve<searchResults> {

  constructor(private service: SearchService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<searchResults> | any {
    if ( !route.queryParams.q ) {
      return {};
    }

    return this.service.query(route.queryParams);
  }
}
