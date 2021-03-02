import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SafeHtmlPipe } from './search-results/safe-html.pipe';
import { PagingComponent } from './paging/paging.component';
import { GoogleRoutingModule } from './google-routing.module';
import { RouterModule } from '@angular/router';
import { GoogleSearchComponent } from './google-search/google-search.component';



@NgModule({
  declarations: [
    GoogleComponent,
    SearchFormComponent,
    LogoComponent,
    SearchResultsComponent,
    SafeHtmlPipe,
    PagingComponent,
    GoogleSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleRoutingModule,
    RouterModule
  ],
  exports: [GoogleComponent]
})
export class GoogleModule { }
