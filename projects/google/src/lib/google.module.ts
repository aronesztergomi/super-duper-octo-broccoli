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



@NgModule({
  declarations: [GoogleComponent, SearchFormComponent, LogoComponent, SearchResultsComponent, SafeHtmlPipe, PagingComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [GoogleComponent]
})
export class GoogleModule { }
