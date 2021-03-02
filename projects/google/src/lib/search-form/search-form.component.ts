import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm = this.fb.group({
    term: [this.route.snapshot.queryParams.q || '']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { q: this.searchForm.value.term.trim().split(' ').join('+') },
      queryParamsHandling: 'merge'
    });
  }
}
