import { Component } from '@angular/core';

@Component({
  selector: 'lib-google',
  template: `
  <div style="max-width: 620px; font-family: arial, sans-serif" class="max-w-5xl mx-auto my-20">
    <lib-logo></lib-logo>
    <lib-search-form></lib-search-form>
    <lib-search-results></lib-search-results>
  </div>
  `,
  styles: [
  ]
})
export class GoogleComponent {

  constructor() {}

}
