import { Component } from '@angular/core';
import { SearchService } from 'google';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private searchService: SearchService) {
    this.searchService.setApiUrl(environment.apiUrl);
  }
}
