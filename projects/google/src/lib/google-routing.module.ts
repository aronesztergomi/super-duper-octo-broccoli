import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleRouteResolverService } from './google-route-resolver.service';
import { GoogleSearchComponent } from './google-search/google-search.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GoogleSearchComponent,
        resolve: { searchResults: GoogleRouteResolverService },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      }
    ])
  ]
})
export class GoogleRoutingModule { }
