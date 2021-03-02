import { TestBed } from '@angular/core/testing';

import { GoogleRouteResolverService } from './google-route-resolver.service';

describe('GoogleRouteResolverService', () => {
  let service: GoogleRouteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleRouteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
