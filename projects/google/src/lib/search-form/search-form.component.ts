import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'lib-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm = this.fb.group({
    term: ['']
  });

  constructor(private fb: FormBuilder, private search: SearchService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.search.term$.next(this.searchForm.value.term);
  }
}
